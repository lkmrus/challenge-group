import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AuthDocument, AuthModel } from './auth.model';
import { Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(AuthModel.name) private authDocumentModel: Model<AuthDocument>,
  ) {}

  async register({
    email,
    password,
  }: AuthDto): Promise<Omit<AuthModel, 'passwordHash'> | null> {
    const passwordHash = await hash(
      password,
      this.configService.get<string>('auth.salt') || '',
    );
    const user = await this.authDocumentModel.findOne({ email });
    if (user) {
      throw new HttpException(
        'Such user is already exists.',
        HttpStatus.CONFLICT,
      );
    }

    const createModel = new this.authDocumentModel({
      email,
      passwordHash,
    });
    return createModel.save();
  }

  async login({ email, password }: AuthDto): Promise<AuthModel> {
    const passwordHash = await hash(
      password,
      this.configService.get<string>('auth.salt') || '',
    );

    const user = await this.authDocumentModel
      .findOne({
        email,
        passwordHash,
      })
      .select('-passwordHash');

    if (!user) {
      throw new HttpException(
        'User with this name does not exist.',
        HttpStatus.NOT_FOUND,
      );
    }

    return user;
  }
}
