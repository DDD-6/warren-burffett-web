import { User } from '../../../entities';

export type SignInDtoOut = Omit<User, 'password'> & {
  id: number;
  createdAt: string;
  updatedAt: string;
};
