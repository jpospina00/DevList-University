import joi from "joi";

const identificationNumber = joi.string().max(20);
const name = joi.string().max(50);
const email = joi.string().email();
const roleId = joi.number().integer().positive();
const phone = joi.string().max(20).allow(null).optional();
const address = joi.string().max(30).allow(null).optional();
export const createUserSchema = joi.object({
  identificationNumber: identificationNumber.required(),
  name: name.required(),
  email: email.required(),
  roleId: roleId.required(),
});

export const updateUserSchema = joi.object({
    phone: phone,
    address: address,
  });

  export const recoveryPasswordSchema = joi.object({
    email: email.required(),
  });



