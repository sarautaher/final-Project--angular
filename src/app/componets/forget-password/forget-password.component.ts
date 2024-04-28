import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
constructor(private _authService:AuthService ,private _Router:Router){

}
isLoad:boolean=false;
ForgetPassword:FormGroup=new FormGroup({
  email:new FormControl(null)
})
VerifyReset:FormGroup=new FormGroup({
resetCode:new FormControl(null)
})
Forget(ForgetPassword:FormGroup){
  this.isLoad=true
  this._authService.ForgetPassword(ForgetPassword.value).subscribe({
    next:(res)=>{console.log(res)
      if(res.statusMsg=== 'success'){
        this.isLoad=false;
        window.document.getElementById('Forget')?.classList.add('d-none');
        window.document.getElementById('VerifyReset')?.classList.remove('d-none');
      }
    }
  });
}
verifyReset(VerifyReset:FormGroup){
  this.isLoad=true;
  this._authService.verifyResetPassword(VerifyReset.value).subscribe({
    next:(res)=>{
      if(res.status ==="Success"){
        this._Router.navigate(['/ResetPassword']);
        this.isLoad=false;
      }
  },error:(err)=>{
    
  }
})

}
}
