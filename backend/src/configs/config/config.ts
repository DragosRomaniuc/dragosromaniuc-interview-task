import { join } from 'path';

import { IConfig } from './config.interface';

export default (): IConfig => {
  return {
    nest: {
      port: parseInt(process.env.PORT, 10) || 3000,
    },
    cors: {
      enabled: true,
    },
    database: {
      connectionString: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE_NAME}`,
      host: process.env.MONGO_HOST,
      port: parseInt(process.env.MONGO_PORT, 10) || 27017,
    },
    global: {
      rootDirectory: join(__dirname, '../../..'),
    },
  };
};
