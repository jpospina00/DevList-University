import vine from '@vinejs/vine'

const loginSchema = vine.object({
  email: vine.string().email(),
  password: vine
    .string()
    .minLength(8)
    .maxLength(32)
})

export default loginSchema
