import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as expressBasicAuth from 'express-basic-auth';

export function setupSwagger(app: INestApplication): void {
  app.use(
    ['/api-docs', '/docs'],
    expressBasicAuth({
      challenge: true,
      users: {
        [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
      },
    }),
  );
  const options = new DocumentBuilder()
    .setTitle('Table Pay')
    .setDescription('Table Pay API description')
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        // scheme: 'bearer',
        name: 'JWT',
        in: 'header',
      },
      'authorization',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}
