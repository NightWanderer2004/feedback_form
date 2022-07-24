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
      TypeOrmModule.forRootAsync({
         imports: [ConfigModule],
         useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: +configService.get<number>('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            entities: [join(__dirname, './entity', '*.entity.{ts,js}')],
            synchronize: true,
         }),
         inject: [ConfigService],
      }),
      ServeStaticModule.forRoot({
         rootPath: join(__dirname, '../../', 'client/build'),
      }),
      UserModule,
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
