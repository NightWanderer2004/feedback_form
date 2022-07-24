import { Body, Controller, Get, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { UserDto } from './dto/user.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
   constructor(private readonly UserService: UserService) {}

   @Get()
   async read() {
      return await this.UserService.getAll()
   }

   @Post()
   async addNew(@Body() dto: UserDto, @Res() res: Response) {
      const result = await this.UserService.addNew(dto)

      if (!dto) return res.status(404).send(result)
      else {
         await this.UserService.sendMail(dto)
         return res.status(202).send(result)
      }
   }
}
