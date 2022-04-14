import Joi from "joi-browser";

const CardsSchema = {
  name: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(10).max(1024).required(),
  address: Joi.string().min(2).max(256).required(),
  phone: Joi.string().min(9).max(14).required(),
  image: Joi.string().min(11).max(256),
};

export default CardsSchema;
