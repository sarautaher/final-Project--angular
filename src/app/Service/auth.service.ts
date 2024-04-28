import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userDate=new BehaviorSubject( null);
  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    if(localStorage.getItem('uesrToken')!==null){
      this.decodeUserDate();
    }
  }
  decodeUserDate(){
    let encodeUser=JSON.stringify(localStorage.getItem('uesrToken'));
    let decode:any=jwtDecode(encodeUser);
    this.userDate.next(decode);
  }
  register(userDate:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userDate);

  }
  logout(){
    localStorage.removeItem('uesrToken');
    this.userDate.next(null);
    this._Router.navigate(['/login']);
  }
  signin(userDate:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userDate);

  }
  ForgetPassword(val:object):Observable<any>
  {
return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',val)
  }
  verifyResetPassword(val:object):Observable<any>
  { console.log(val)
return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',val)
  }
  ResetPassword(ResetPassword:object):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,ResetPassword)
  }
}
