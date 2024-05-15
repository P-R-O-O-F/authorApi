/* eslint-disable prettier/prettier */
import { MinLength } from 'class-validator';

export class UserCreateDto {
  @MinLength(3, {
    message: 'L username doit contenir au moins 3 caractères',
  })
  firstName: string;
  @MinLength(3, {
    message: 'L username doit contenir au moins 3 caractères',
  })
  lastName: string;
  @MinLength(1, {
    message: 'L age doit contenir au moins 1 caractères',
  })
  age: string;
  @MinLength(10, {
    message: 'Le password doit contenir au moins 10 caractères',
  })
  password: string;
}
