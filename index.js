import express from 'express';
import routerApi from './src/routes/index.js';
import { config } from './src/config/config.js';

const app = express();
const port = config.port;

app.use(express.json());
routerApi(app);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});