import { User } from '../../../entities';

export type SignInDtoIn = Omit<User, 'name'>;

export type SignUpDtoIn = User;
