import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { CartService } from '../../Service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartNumber:number=0;
isloaing:boolean=false;
Logout(){
  this._AuthService.logout();
}
constructor(private _AuthService:AuthService ,private _CartService:CartService){
  _CartService.setcartNumber.subscribe({next:(val)=>{
this.cartNumber=val;
  }})
  _AuthService.userDate.subscribe({
    next:()=>{
      if(_AuthService.userDate.getValue() !==null){
      this.isloaing=true;
    }
    else{
      this.isloaing=false;
    }}
    
  })

}
}
