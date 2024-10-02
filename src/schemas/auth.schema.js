import Joi from 'joi';

const email = Joi.string().email();
const password = Joi.string().min(6).max(32);

// Esquema para login
const loginSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

// Esquema para recuperar contraseña usando email
export const getEmailForRecoveryPasswordSchema = Joi.object({
  email: email.required(),
});

// Esquema para la recuperación de la contraseña
export const recoveryPasswordSchema = Joi.object({
  password: password.required(),
});

export default loginSchema;

