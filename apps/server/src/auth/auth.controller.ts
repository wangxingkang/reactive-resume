import {
  Controller,
  Post,
  Get,
} from '@nestjs/common';
import { UserWithSecrets } from '@reactive-resume/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {};

  @Get('login')
  login() {
    return 'login api';
  }
}
