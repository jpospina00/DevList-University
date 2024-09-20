import vine from "@vinejs/vine";

export const createUserSchema = vine.object({
  identificationNumber: vine.string().maxLength(20),
  name: vine.string().maxLength(50),
  email: vine.string().email(),
  roleId: vine.number().withoutDecimals().positive(),
});

export const updateUserSchema = vine.object({
    phone: vine.string().maxLength(20).nullable().optional(),
    address: vine.string().maxLength(30).nullable().optional(),
  });




