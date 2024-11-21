import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ noServer: true });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    // Aquí procesas el blob de video recibido
    console.log('Received frame:', message);

    // Opcional: Puedes reenviar el mensaje a otro cliente o almacenarlo
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed Giancarlo');
  });
});

export default function handler(req: any, res: any) {
  if (req.method === 'GET') {
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
      wss.emit('connection', ws, req);
    });
  } else {
    res.status(405).end(); // Solo permitir WebSocket conexiones
  }
}
