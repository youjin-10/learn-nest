import { IsNumber, IsString, Length } from 'class-validator';

export class CreateMovieDto {
  @Length(1, 20)
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
