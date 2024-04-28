import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _AuthService:AuthService ,private _Router:Router){}
  isLoad:boolean=false;
  apiError:string='';
LoginFrom:FormGroup=new FormGroup({
  email:new FormControl(null, [Validators.required,Validators.email]),
  password:new FormControl(null, [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]/)]),
});
login(LoginFrom:FormGroup){
  this.isLoad=true;
  if(LoginFrom.value){
    this._AuthService.signin(LoginFrom.value).subscribe( {next:(resposne)=>{console.log(resposne)
   
       if (resposne.message==='success'){
        localStorage.setItem('uesrToken',resposne.token);
        this._AuthService.decodeUserDate()
       this.isLoad=false;
       this._Router.navigate(['/Home']);
      }
      
    } ,
      error:(err)=>{console.log(err.error.message);
        this.isLoad=false;
        this.apiError=err.error.message;
        
      }

    });
    ;
  }
console.log(LoginFrom);
}
}
