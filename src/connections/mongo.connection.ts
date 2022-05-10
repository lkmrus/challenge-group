import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose/dist/interfaces/mongoose-options.interface';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService) => {
  return configService.get('db.mongo');
};

const getMongoOptions = () => ({});
