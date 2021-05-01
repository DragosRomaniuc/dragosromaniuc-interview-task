import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../modules/database/DatabaseModule';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from './schemas/user.schema';
import { UsersModule } from './users.module';
import { UsersService } from './users.service';
import config from '../configs/config/config';
import envValidation from '../configs/env/env.validation';
import { AppModule } from '../app.module';
import { getModelToken } from '@nestjs/mongoose';
jest.setTimeout(10000);

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User.name),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
