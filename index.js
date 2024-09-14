import express from 'express';
import routerApi from './src/routes/index.js';
import { config } from './src/config/config.js';
import e from 'express';

const app = express();
const port = config.port;

app.use(express.json());
routerApi(app);

// Iniciar el servidor
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;