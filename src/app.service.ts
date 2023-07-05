import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly Product: any[] = [];

  getHello(): any {
    return this.Product;
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handlerUserCreated - Product', data);
    this.Product.push({
      email: data.email,
      timestamp: new Date(),
    });
  }

  getProduct() {
    return this.Product;
  }
}
