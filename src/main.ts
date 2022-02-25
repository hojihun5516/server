import { SuccessInterceptor } from './common/interceptors/success.interceptor';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new SuccessInterceptor());
  setupSwagger(app);
  const PORT = process.env.PORT;
  await app.listen(PORT);
}
bootstrap();
