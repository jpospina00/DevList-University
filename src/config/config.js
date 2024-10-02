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
  email: process.env.EMAIL,
  emailPassword: process.env.EMAIL_PASSWORD,
  googleType: process.env.GOOGLE_TYPE,
  googleProjectId: process.env.GOOGLE_PROJECT_ID,
  googlePrivateKeyId: process.env.GOOGLE_PRIVATE_KEY_ID,
  googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY,
  googleClientEmail: process.env.GOOGLE_CLIENT_EMAIL,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleAuthUri: process.env.GOOGLE_AUTH_URI,
  googleTokenUri: process.env.GOOGLE_TOKEN_URI,
  googleAuthProviderX509CertUrl: process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URL,
  googleClientX509CertUrl: process.env.GOOGLE_CLIENT_X509_CERT_URL,
  googleUniverseDomain: process.env.GOOGLE_UNIVERSE_DOMAIN,
};