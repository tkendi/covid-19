import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import {setupSwagger} from "src/util/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // setupSwagger(app);
  app.enableCors();
  await app.listen(8000);
}

void bootstrap();
