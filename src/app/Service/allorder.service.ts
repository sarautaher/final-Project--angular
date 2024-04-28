import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AllorderService {
  baseUrl: string = "https://ecommerce.routemisr.com"
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  headers = {
    token:localStorage.getItem('uesrToken') || ''
  }
  constructor( private _HttpClient:HttpClient) {
   this. decodeUserToken();
   }
  checkOut(cartId: string|null, shippingAddressData: object): Observable<any> {
   
    return this._HttpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200 `
      , { shippingAddress: shippingAddressData }
      , {headers : this.headers}
    )
  }
  decodeUserToken() {
    let userToken = JSON.stringify(localStorage.getItem('uesrToken') )
    let decoded = jwtDecode(userToken)
    this.userData.next(decoded)
  }
  getAllUserOrders(id: string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/orders/user/${id}`)
  }
}
