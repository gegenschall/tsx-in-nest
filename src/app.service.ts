import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly itemList!: string[];

  constructor() {
    this.itemList = [];
  }

  public addItem(value: string): void {
    this.itemList.push(value);
  }

  public getItems(): string[] {
    return this.itemList;
  }
}
