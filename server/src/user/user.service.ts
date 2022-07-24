import { SendGridService } from '@anchan828/nest-sendgrid'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import UserEntity from 'src/entity/user.entity'
import { Repository } from 'typeorm'
import { UserDto } from './dto/user.dto'

@Injectable()
export class UserService {
   constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>, private readonly sendGrid: SendGridService) {}

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
   async sendMail({ email, name }) {
      await this.sendGrid.send({
         to: email,
         from: 'edpovierin@gmail.com',
         subject: `Message to ${name}`,
         text: `Hello, ${name} we are surprised that you give a feedback to us`,
      })
   }
}
