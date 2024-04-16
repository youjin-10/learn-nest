### Learning NestJS

#### controller & service

```javascript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

- it could've been returing string instead of calling `getHello` function. why?
- `controller` is for hanling requests and responses
- `service` is for handling business logic and queries..
- this way we can separate concerns/purposes and also it helps to write test codes easier
