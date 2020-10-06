import Joi from '@hapi/joi';

export function validateUser(user) {
  const schema = Joi.object({
    firstname: Joi.string()
      .min(3)
      .max(50)
      .required(),
    surname: Joi.string()
      .min(3)
      .max(50)
      .required(),
    othername: Joi.string()
      .min(3)
      .max(50)
      .optional()
      .allow(''),
    address: Joi.string()
      .min(5)
      .max(255)
      .required(),
    phone: Joi.string()
      .min(11)
      .max(11)
      .required(),
    muqam: Joi.string().required(),
    marital_status: Joi.string().required(),
    date_of_birth: Joi.date().required(),
    occupation: Joi.string().required(),
    khuddam_no: Joi.string()
      .optional()
      .allow(''),
    employment_status: Joi.string().required(),
    employment_type: Joi.string().required(),
    qualification: Joi.string().required(),
    blood_group: Joi.string()
      .optional()
      .allow(''),
    genotype: Joi.string()
      .optional()
      .allow(''),
    numb_of_children: Joi.string()
      .optional()
      .allow(''),
  });
  return schema.validate(user);
}

export function validateUserLogin(user) {
  const schema = Joi.object({
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
    khuddam_no: Joi.string().required(),
  });
  return schema.validate(user);
}

export function validateFileUpload(file) {
  const schema = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
  });
  return schema.validate(file);
}
