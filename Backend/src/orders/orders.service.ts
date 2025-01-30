import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    let user = null;

    // const user = await this.userRepository.findOne({
    //   where: { id: createOrderDto.user_id },
    // });
    if (createOrderDto.user_id) {
      user = await this.userRepository.findOne({
        where: { id: createOrderDto.user_id },
      });
      if (!user) {
        throw new NotFoundException(
          `El usuario con ID ${createOrderDto.user_id} no existe`,);
      }
    }

    const price_decimal = parseFloat(createOrderDto.precio_final.toFixed(2));

    const order = this.orderRepository.create({
      ...createOrderDto,
      precio_final: price_decimal,
      user,
    });

    return await this.orderRepository.save(order);
  }

  async findAll() {
    return await this.orderRepository.find();
  }

  async findOne(id: number) {
    return await this.orderRepository.findOneBy({ id });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    // return await this.orderRepository.update(id, updateOrderDto);
    return;
  }

  remove(id: number) {
    return `This action removes a #${id} orders`;
  }
}
