/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';
import { PasswordHasherServiceInterface } from './PasswordHasherServiceInterface';

export class PasswordHasherService implements PasswordHasherServiceInterface{
  private saltOrRounds: number;

  constructor(saltOrRounds = 10) {
    this.saltOrRounds = saltOrRounds;
  }

  public async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltOrRounds);
  }
}