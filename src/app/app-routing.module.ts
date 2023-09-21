import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./pages/sign-in/sign-in.component";
import {HomeComponent} from "./pages/home/home.component";
import {ProductMenComponent} from "./pages/product-men/product-men.component";

const routes: Routes = [
  {path: "sign-in", component: SignInComponent},
  {path: "", redirectTo: '/home', pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "product-men", component: ProductMenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
