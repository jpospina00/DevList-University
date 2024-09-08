import express from 'express';

const app = express();
const port = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});