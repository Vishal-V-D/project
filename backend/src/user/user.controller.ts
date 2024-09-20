import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users') // Define the route prefix
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Fetch all users
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // Fetch a single user by ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | undefined> {
    return this.userService.findOne(Number(id)); // Convert id to a number
  }
}
