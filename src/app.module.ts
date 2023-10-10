import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import entities from "./typeorms";
import { UsersModule } from "./users/users.module";
import { RolesGuard } from "./typeorms/roles.guard";
import { APP_GUARD } from "@nestjs/core";
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "nike",
      entities: entities,
      synchronize: true
    }),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
