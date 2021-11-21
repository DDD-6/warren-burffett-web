export interface User {
  id: number;
  email: string;
  name: string;
  password?: string;
  image?: string;
  oauthType?: 'LOCAL';
}
