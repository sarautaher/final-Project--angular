import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService ,private _Router:Router){}
  isLoad:boolean=false;
  apiError:string='';
  RegisterForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(8), Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },{ validators: this.RePassword}); // Assigning the custom validator function to the 'validators' property

  RePassword(formGroup: any) { // Pass FormGroup as the parameter type
    const password = formGroup.get('password');
    const rePassword = formGroup.get('rePassword');

    if (password?.value === rePassword?.value) {
      return null; // passwords match, return null (no error)
    } else {
      rePassword?.setErrors({Passwordmatch:' Repassword dont matches Password' })
      return {
        
        Passwordmatch: 'Re-entered password does not match the password'
      } // passwords don't match, return an error object
    }
  }
handleRegister(RegisterForm:FormGroup){
  
  this.isLoad=true;
  if(RegisterForm.value){
    this._AuthService.register(RegisterForm.value).subscribe( {next:(resposne)=>{console.log(resposne)
       if (resposne.message==='success'){
       this.isLoad=false;
       this._Router.navigate(['/login']);
      }
      
    } ,
      error:(err)=>{console.log(err.error.message);
        this.isLoad=false;
        this.apiError=err.error.message;
        
      }

    });
    ;
  }
console.log(RegisterForm);
}
}
