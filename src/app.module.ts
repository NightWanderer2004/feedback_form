import { Inject, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { UserModule } from './user/user.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
   imports: [
      ConfigModule.forRoot({ isGlobal: true }),
      TypeOrmModule.forRoot({
         url: process.env.DATABASE_URL,
         type: 'postgres',
         entities: [join(__dirname, './entity', '*.entity.{ts,js}')],
         synchronize: true,
         ssl: true,
         extra: {
            ssl: {
               rejectUnauthorized: false,
            },
         },
      }),
      ServeStaticModule.forRoot({
         rootPath: join(__dirname, '../', 'client/build'),
      }),
      UserModule,
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
