import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const user = await this.userRepository.findOneBy({
      nombre: createOrderDto.user,
    });

    if (!user) {
      throw new BadRequestException('Empleado no encontrado');
    }

    return await this.orderRepository.save({
      ...createOrderDto,
      user,
    });
  }

  async findAll() {
    return await this.orderRepository.find();
  }

  async findOne(id: number) {
    return await this.orderRepository.findOneBy({ id });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    // return await this.orderRepository.update(id, updateOrderDto);
    return
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
