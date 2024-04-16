import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = []; //ref: fake data

  getAll(): Movie[] {
    return this.movies; // in a real world application, this would be a database query
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }

  deleteOne(id: string): boolean {
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
