import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { Role } from "../typeorms/role.enum";
import { Roles } from "../typeorms/role.decorator";
import { RolesGuard } from "../typeorms/roles.guard";
import { Public } from "./auth.guard";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private user: UsersService) {
  }

  @Post("register")
  async register(
    @Body("name") name: string,
    @Body("email") email: string,
    @Body("password") password: string,
    @Body("roles") roles: string[]
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await this.user.create({
      name, email, password: hashedPassword, roles
    });

    delete user.password;
    return user;
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    console.log('Login Success');
    return this.authService.signIn(signInDto.email, signInDto.password);
  }


  @Get('profile')
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  getProfile(@Request() req) {
    return 'test';
  }


  @Get('/:id')
  getUser(@Param('id') id:number){
    return this.user.findOneById(id);
  }
}