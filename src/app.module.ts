import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { SystemModule } from './system/system.module';
import { LoggerMiddleware } from './logger.middleware';
import {CatsModule} from './cats/cats.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'hotelsystem',
    entities: [User],
    synchronize: true,
  }), 
  UserModule, SystemModule, CatsModule,
],
  controllers: [AppController],
  providers: [AppService],
})
@Module({
  imports: [CatsModule],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
