import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UncompletedModule } from './alltasks/uncompleted/uncompleted.module';
import { CompletedModule } from './alltasks/completed/completed.module';
import { DiscardedModule } from './alltasks/discarded/discarded.module';

const port = Number(process.env.DATABASE_PORT) || 5432;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: port,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    AuthModule,
    UsersModule,
    UncompletedModule,
    CompletedModule,
    DiscardedModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
