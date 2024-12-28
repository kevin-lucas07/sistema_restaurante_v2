import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Order } from 'src/order/entities/order.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Employee, Order])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
