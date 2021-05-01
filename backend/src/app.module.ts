import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './configs/config/config';
import envValidation from './configs/env/env.validation';
import { DatabaseModule } from './modules/database/DatabaseModule';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      validationSchema: envValidation,
      isGlobal: true,
      cache: true,
    }),
    DatabaseModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
