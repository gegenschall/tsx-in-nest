import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { JsxTransform } from './jsx-transform.decorator';
import { App } from './components/app.component';
import { List } from './components/list.component';
import { Form } from './components/form.component';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @JsxTransform()
  public index() {
    return (
      <App>
        <List items={this.appService.getItems()} />
        <Form />
      </App>
    );
  }

  @Post('/add')
  @JsxTransform()
  public getHello(@Body('item') item: string) {
    this.appService.addItem(item);

    return <List items={this.appService.getItems()} />;
  }
}
