import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'User' })
export default class UserEntity {
   @PrimaryGeneratedColumn({
      name: 'id',
   })
   id: number

   @Column({ nullable: true })
   name: string

   @Column({ nullable: true })
   email: string

   @Column({ nullable: true })
   message: string
}
