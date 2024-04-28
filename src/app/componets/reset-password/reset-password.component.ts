import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})

export class ResetPasswordComponent {
constructor(private _AuthService:AuthService,private _Router:Router ){

}

isLoad:boolean=false;
ResetPasswordForm=new FormGroup({
  email: new FormControl(null),
  newPassword:new FormControl(null),
})
ResetPassword(ResetPasswordForm:FormGroup){
  this.isLoad=true;
this._AuthService.ResetPassword(ResetPasswordForm.value).subscribe({
  next:(res)=>{
    if(res.token ){
    
setTimeout(() => {
  this._Router.navigate(['/login']);
},200);

    
  }
    this.isLoad=false;
    console.log(res)
  },error:(res)=>{
    console.log(res)
  }
})
}
}
