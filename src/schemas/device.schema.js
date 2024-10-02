import joi from "joi";

const deviceName = joi.string().max(50);
const deviceType = joi.number().integer().positive();
const warehouse = joi.number().integer().positive();
const deviceStatus = joi.number().integer().positive();
const deviceDescription = joi.string().max(50).allow(null).optional();
const brand = joi.string().max(50);


export const createDeviceSchema = joi.object({

    deviceName: deviceName.required(),
    deviceType: deviceType.required(),
    warehouse: warehouse,
    deviceStatus: deviceStatus.required(),
    deviceDescription: deviceDescription,
    brand: brand,
});


