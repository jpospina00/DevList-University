import vine from '@vinejs/vine'

export const loginSchema = vine.object({
	email: vine.string().email(),
	password: vine
		.string()
		.minLength(8)
		.maxLength(32)
})

export const changePasswordSchema = vine.object({
	password: vine.string().minLength(8).maxLength(32),
	newPassword: vine.string().minLength(8).maxLength(32)
})