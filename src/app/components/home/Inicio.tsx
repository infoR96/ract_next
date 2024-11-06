import React from 'react';
import './Inicio.css';

export const Inicio: React.FC = () => {
  return (
    <>
      <div className="solar-storm-container">
        <div className="solar-storm-header">
          <h1>CODEA FACIL
          </h1>
          <p>
          1er Bootcamp de tecnología & Machine Learning aplicado a la Metalurgia LATAM
          Minería 4.0 - Bootcamp de tecnología aplicado a Minería
          </p>
        </div>


        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XrOVx7wOLSM?si=aLA0D9J35f8Tuc5x" title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
         
        </div>
        <div className="cards">
          <a href="/simulation" className="card">
            <img src="/imagenes/1.1_Simulation.png" alt="Simulation" />
            <h2>CALCULOS</h2>
          </a>
          
          <a href="/data" className="card">
            <img src="/imagenes/1.3_data_recollection.png" alt="Data Recollection" />
            <h2>DATA RECOLLECTION</h2>
          </a>
        </div>
      </div>
    </>
  );
};

export default Inicio;
