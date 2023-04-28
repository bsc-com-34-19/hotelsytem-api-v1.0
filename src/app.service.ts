import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  delete() {
    throw new Error('Method not implemented.');
  }
  save() {
    throw new Error('Method not implemented.');
  }
  create(): number {
    throw new Error('Method not implemented.');
  }
  getPosts(): string {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
