import vine, { errors } from "@vinejs/vine";

export const validateRequestBody = (schema) => async (req, res, next) => {
  try {
    console.log("validando schema");
    const data = req.body;
    await vine.validate({ schema, data });
    next();
  } catch (error) {
    console.log("error en la validacion");
    if (error instanceof errors.E_VALIDATION_ERROR) {
      // array created by SimpleErrorReporter
      console.log(error.messages[0].message);
    }
    res.status(400).json({
      message: error.messages[0].message,
      error: true,
    });
  }
};
