import Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { WorldController } from './world.controller';
import { WorldService } from './world.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV == 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi?.object({
        NOED_ENV: Joi.string().valid('dev', 'prod').required(),
        CovidOpenDataKey: Joi.string().required(),
      }),
    }),
  ],
  controllers: [WorldController],
  providers: [WorldService],
})
export class WorldModule {}
