import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getPosts(): string {
    return this.appService.getPosts();
  }

  @Get('user/checkin')
  getPost(): string{
    return this.appService.getPosts();
  }

  @Post('room')
  getParam() : number{
    return this.appService.create();
  }

  @Patch('room/addroom')
  Param(){
    return this.appService.save();
  }

  @Delete('user/checkout')
  remove(user: string){
    return this.appService.delete();
  }

}
