import Joi from 'joi'
const creditCartValidator = (body: any) => {
    const creditCardJoiSchema = Joi.object({
        cardNumber: Joi.string().required().trim().length(16),
        expirationDate: Joi.string().required(),
        cvv: Joi.string().required().trim().min(3).max(4),
    });
    return creditCardJoiSchema.validate(body)
}
export default {creditCartValidator}
