export class AuthModel implements IAuth {
  _id: number;
  email: string;
  passwordHash: string;
  createdAt: Date;
}

export interface IAuth {
  email: string;
  createdAt: Date;
}
