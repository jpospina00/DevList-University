import dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'dev';

// Cargar el archivo .env correspondiente
dotenv.config({ path: `./envs/.env.${env}` });

export const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  jwtSecret: process.env.JWT_SECRET,
};