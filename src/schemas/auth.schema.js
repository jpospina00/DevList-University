import vine from '@vinejs/vine'

const loginSchema = vine.object({
  email: vine.string().email(),
  password: vine
    .string()
    .minLength(6)
    .maxLength(32)
})

export const getEmailForRecoveryPasswordSchema = vine.object({
  email: vine.string().email(),
});

export const recoveryPasswordSchema = vine.object({
  password: vine
    .string()
    .minLength(6)
    .maxLength(32)
});

export default loginSchema
