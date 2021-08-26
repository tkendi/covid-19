import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KoreaModule } from './korea/korea.module';
import { WorldModule } from './world/world.module';

@Module({
  imports: [KoreaModule, WorldModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
