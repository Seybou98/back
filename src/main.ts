import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://diokolo.netlify.app',
      'http://localhost:3000'  // pour le développement local
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT || 3002);
}
bootstrap();
