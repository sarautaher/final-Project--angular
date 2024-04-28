import { ProductDetailsComponent } from './componets/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { CartComponent } from './componets/cart/cart.component';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { BrandsComponent } from './componets/brands/brands.component';
import { authGuard } from './Guard/auth.guard';
import { ProductComponent } from './componets/product/product.component';
import { CategoryComponent } from './componets/category/category.component';
import { AllordersComponent } from './componets/allorders/allorders.component';
import { PaymentComponent } from './componets/payment/payment.component';
import { ForgetPasswordComponent } from './componets/forget-password/forget-password.component';
import { ResetPasswordComponent } from './componets/reset-password/reset-password.component';

const routes: Routes = [
  {path:'' ,redirectTo:"Home" ,pathMatch:"full"}, 
  {path:'Home',canActivate:[authGuard],component:HomeComponent , title: "Home"},
  {path:'cart',canActivate:[authGuard],component:CartComponent ,title: "Cart"},
  {path:'product',canActivate:[authGuard],component:ProductComponent ,title: "Products"},
  {path:'category',canActivate:[authGuard],component:CategoryComponent ,title: "Category"},
  {path:'productDetails/:id',canActivate:[authGuard],component:ProductDetailsComponent,title: "ProductsDetails"},
  {path:'allorders',canActivate:[authGuard],component:AllordersComponent ,title: "All order"},
  {path:'Payment/:cartId',canActivate:[authGuard],component:PaymentComponent,title: "Payment"},
  {path:'login', component:LoginComponent,title: "login"},
  {path:'register',component:RegisterComponent ,title: "register"},
  {path:'ResetPassword',component:ResetPasswordComponent ,title: "ResetPassword"},
  {path:'ForgetPassword',component:ForgetPasswordComponent,title: "ForgetPassword"},
  {path:'brands',canActivate:[authGuard],component:BrandsComponent ,title: "brands"},
  {path:'**',component:NotFoundComponent ,title: "Not Found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
