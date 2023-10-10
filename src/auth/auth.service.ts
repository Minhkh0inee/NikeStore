import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(email:string, pass:string) {
    const user = await this.usersService.findOne(email);

    if (!user) {
      throw new NotFoundException();
    }

    if (!await bcrypt.compare(pass, user.password)) {
      throw new BadRequestException("Wrong password");
    }


    const payload = { sub: user.id, email: user.email, roles: user.roles , name: user.name};
    return {
      accessToken: await this.jwtService.signAsync(payload),
      refreshToken: await this.jwtService.signAsync({ expiresIn: '30d' }),
      name: user.name
    };
  }
}
