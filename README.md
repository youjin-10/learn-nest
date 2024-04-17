### Learning NestJS (TIL)

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

#### class for DTOs

- why do we use `class` for DTOs when `type` of TypeScript works as well?
- `class` supports decorators like `@IsString()` from `class-validator` package to specify validation rules directly in DTO class.
- `type` does not support decorators - it would not be able to use powerful validation features.
