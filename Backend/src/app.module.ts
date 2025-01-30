import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'restaurant',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    OrdersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
