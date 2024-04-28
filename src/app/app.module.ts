import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { HomeComponent } from './componets/home/home.component';
import { CartComponent } from './componets/cart/cart.component';
import { BrandsComponent } from './componets/brands/brands.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './componets/product/product.component';
import { ProductDetailsComponent } from './componets/product-details/product-details.component';
import { FooterComponent } from './componets/footer/footer.component';
import { CategoryComponent } from './componets/category/category.component';

import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlideHomeComponent } from './componets/slide-home/slide-home.component';
import { AllordersComponent } from './componets/allorders/allorders.component';
import { PaymentComponent } from './componets/payment/payment.component';
import { ForgetPasswordComponent } from './componets/forget-password/forget-password.component';
import { ResetPasswordComponent } from './componets/reset-password/reset-password.component';
import { SearchPipe } from './search.pipe';
import { LoaderComponent } from './componets/loader/loader.component';
import { WishListComponent } from './componets/wish-list/wish-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    BrandsComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ProductDetailsComponent,
    FooterComponent,
    CategoryComponent,
    SlideHomeComponent,
    AllordersComponent,
    PaymentComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    SearchPipe,
    LoaderComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
