import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UncompletedModule } from './alltasks/uncompleted/uncompleted.module';
import { CompletedModule } from './alltasks/completed/completed.module';
import { DiscardedModule } from './alltasks/discarded/discarded.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
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
