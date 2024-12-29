import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from 'src/employee/employee.service';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports:[TypeOrmModule.forFeature([Order]), EmployeeModule],
  controllers:[OrderController],
  providers: [OrderService, EmployeeService],
})
export class OrderModule {}
