import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
// import { AppController } from './app.controller';

// module adds functionality to the class, etc.
@Module({
  imports: [MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
