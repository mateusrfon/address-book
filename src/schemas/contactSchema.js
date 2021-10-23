import JoiVanilla from 'joi';
import JoiDate from '@joi/date';

const Joi = JoiVanilla.extend(JoiDate);

const name = Joi.string().required();
const email = Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required();
const birthdate = Joi.date().format('DD/MM/YYYY').required();
const zipCode = Joi.string().length(8).required();
const street = Joi.string().required();
const number = Joi.string().required();
const city = Joi.string().required();
const state = Joi.string().required();

export { name, email, birthdate, zipCode, street, number, city, state };
