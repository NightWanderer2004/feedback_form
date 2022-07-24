import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import UserEntity from 'src/entity/user.entity'
import { Repository } from 'typeorm'
import { UserDto } from './dto/user.dto'

@Injectable()
export class UserService {
   constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

   async getAll() {
      return this.userRepository.find()
   }
   async addNew(dto: UserDto) {
      if (!dto) return { message: 'Something went wrong' }
      else {
         const user = this.userRepository.create(dto)
         this.userRepository.save(user)
         return { message: 'Success, thank You!' }
      }
   }
}
