import { Injectable } from '@nestjs/common';
import { Role } from "../typeorms/role.enum";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../typeorms";



@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({email});
  }
  async findOneById(id: number): Promise<User | undefined> {
    return this.userRepository.findOneBy({id});
  }

  async create(data: any):Promise<User>{
    return this.userRepository.save(data);
  }
}
