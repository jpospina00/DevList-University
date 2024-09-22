import vine from "@vinejs/vine";

export const createDeviceSchema = vine.object({

    deviceName: vine.string().maxLength(50),
    deviceType: vine.number().withoutDecimals().positive(),
    warehouse: vine.number().withoutDecimals().positive(),
    deviceStatus: vine.number().withoutDecimals().positive(),
    deviceDescription: vine.string().maxLength().nullable().optional(),
    brand: vine.string().maxLength(50)
});


