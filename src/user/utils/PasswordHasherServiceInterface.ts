/* eslint-disable prettier/prettier */
export interface PasswordHasherServiceInterface {
  hashPassword(password: string): Promise<string>;
}