import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  try {
    const app = await NestFactory.create(AppModule);
    app.connectMicroservice({
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    });
    await app.startAllMicroservices();
    await app.listen(3001);
    logger.log('Product Application started successfully');
  } catch (error) {
    logger.error(`Failed to start Product application: ${error.message}`);
    process.exit(1);
  }
}

bootstrap();
