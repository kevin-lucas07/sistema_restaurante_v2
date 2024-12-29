import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';

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
    UserModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
