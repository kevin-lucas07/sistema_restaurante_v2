import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
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
    EmployeeModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
