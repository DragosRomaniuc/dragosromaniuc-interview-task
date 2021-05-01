import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/DatabaseModule';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './configs/config/config';
import envValidation from './configs/env/env.validation';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from './users/schemas/user.schema';
import { AppModule } from './app.module';
// jest.setTimeout(30000);
describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: getModelToken(User.name),
          useValue: {},
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
