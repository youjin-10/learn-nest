import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

// module adds functionality to the class, etc.
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
