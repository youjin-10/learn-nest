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

- 🙋 it could've been returing string instead of calling `getHello` function. why?
- `controller` is for hanling requests and responses
- `service` is for handling business logic and queries..
- this way we can separate concerns/purposes and also it helps to write test codes easier

#### class for DTOs

- 🙋 why do we use `class` for DTOs when `type` of TypeScript works as well?
- `class` supports decorators like `@IsString()` from `class-validator` package to specify validation rules directly in DTO class.
- `type` does not support decorators - it would not be able to use powerful validation features.

#### dependency injection

- one of design patterns
- DI allows a class to use functions or methods from a dependency without needing to instantiate it.
- 🙋 then what matters about instantiating?
  - NestJS or other frameworks would handle creating instances instead of you (developers), so there's no need for us to know details about instantiating a dependency.
  - Also, DI helps use resources like memory effectively. Let's say several different controllers need `SomeService`. If we create instances everywhere, it would be a waste of resource. With benefit of DI, controllers can use methods of `SomeService` with one instance (singleton).
  - Thridly, it follows `Seperation of Concerns`. Controller takes care of its own job instead of being coupled with dependencies by knowing how to instantiate them.
