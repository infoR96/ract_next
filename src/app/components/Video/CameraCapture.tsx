'use client';

import React, { useEffect, useRef } from 'react';

const VideoStreamer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Inicializar la cámara y obtener el stream
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing the camera:', error);
      }
    };

    initCamera();

    // Establecer la conexión WebSocket
    socketRef.current = new WebSocket('ws://localhost:8000/ws/video'); // Asegúrate de que el servidor esté corriendo en este puerto
    socketRef.current.onopen = () => {
      console.log('WebSocket connection opened');
    };
    socketRef.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    socketRef.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Limpiar recursos al desmontar el componente
    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop()); // Detener todos los tracks de video
      }
      if (socketRef.current) {
        socketRef.current.close(); // Cerrar la conexión WebSocket
      }
    };
  }, []);

  useEffect(() => {
    // Función para capturar los frames del video y enviarlos al servidor
    const sendVideoFrames = () => {
      if (!videoRef.current || !canvasRef.current || !socketRef.current) return;

      const context = canvasRef.current.getContext('2d');
      if (context) {
        // Dibujar el cuadro actual del video en el canvas
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

        // Obtener la imagen como blob
        canvasRef.current.toBlob((blob) => {
          if (blob && socketRef.current?.readyState === WebSocket.OPEN) {
            socketRef.current.send(blob); // Enviar el blob al servidor WebSocket
          }
        }, 'image/jpeg');
      }

      // Llamar a esta función nuevamente en el siguiente cuadro
      requestAnimationFrame(sendVideoFrames);
    };

    // Iniciar la captura de video y el envío de frames
    sendVideoFrames();
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxHeight: '400px' }} />
      <canvas ref={canvasRef} style={{ display: 'none' }} width={640} height={480} />
    </div>
  );
};

export default VideoStreamer;
