/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';

export class PasswordHasher {
  private saltOrRounds: number;

  constructor(saltOrRounds = 10) {
    this.saltOrRounds = saltOrRounds;
  }

  public async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltOrRounds);
  }
}