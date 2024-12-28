import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    // const employee = this.employeeRepository.create(createEmployeeDto);
    // return await this.employeeRepository.save(employee);
    return
  }

  async findAll() {
    return await this.employeeRepository.find();
  }

  async findOne(id: number) {
    return await this.employeeRepository.findOneBy({id});
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    // return await this.employeeRepository.update(id, updateEmployeeDto)
    return
  }

  async remove(id: number) {
    return await this.employeeRepository.softDelete({id});
  }
}
