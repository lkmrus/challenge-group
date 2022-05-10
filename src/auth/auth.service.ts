import { Injectable } from '@nestjs/common';
import { AuthDocument, AuthModel } from './auth.model';
import { Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Auth') private authDocumentModel: Model<AuthDocument>,
  ) {}

  async register({
    email,
    password,
  }: AuthDto): Promise<Omit<AuthModel, 'passwordHash'> | null> {
    const passwordHash = await hash(
      password,
      '$2a$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa',
    );

    const createModel = new this.authDocumentModel({
      email,
      passwordHash,
    });
    return createModel.save();
  }

  async login({ email, password }: AuthDto): Promise<AuthModel | null> {
    const userData = this.authDocumentModel.findOne({
      email,
    });
    console.log(userData);
    // TODO
    // await compare(password, passwordHash);

    return userData;
  }
}
