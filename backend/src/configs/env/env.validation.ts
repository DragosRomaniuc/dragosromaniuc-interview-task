import * as Joi from 'joi';
import { EnvironmentVariables } from './env.interface';

const envValidation = Joi.object<EnvironmentVariables>({
  PORT: Joi.number().required(),
  MONGO_USERNAME: Joi.string().required(),
  MONGO_PASSWORD: Joi.string().required(),
  MONGO_DATABASE_NAME: Joi.string().required(),
});

export default envValidation;
