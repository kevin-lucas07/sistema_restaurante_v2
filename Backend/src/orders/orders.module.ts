import { Module } from '@nestjs/common';
import { OrderService } from './orders.service';
import { OrderController } from './orders.controller';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/users/users.service';
import { UserModule } from 'src/users/users.module';

@Module({
  imports:[TypeOrmModule.forFeature([Order]), UserModule],
  controllers:[OrderController],
  providers: [OrderService, UserService],
})
export class OrderModule {}
