import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'User' })
export default class UserEntity {
   @PrimaryGeneratedColumn({
      name: 'id',
   })
   id: number

   @Column()
   name: string

   @Column()
   email: string

   @Column()
   message: string
}
