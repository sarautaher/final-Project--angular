import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  setcartNumber=new BehaviorSubject(0);
   header:any={token:localStorage.getItem('uesrToken')};
  constructor( private _HttpClient:HttpClient) { }

  AddTocart(productId:string):Observable<any>{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId:productId},{
  headers:this.header
})
  }
  getTocart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
      headers:this.header
    })
      }
      DeleteCart(productId:string):Observable<any>{
        return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
          headers:this.header
        })  
}
UpdataCart(productId:string,count:number):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count:count},{
    headers:this.header
  })  
}
CheckoutPayment(FormDate:any, productId:string):Observable<any>{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${productId}?url=http://localhost:4200`,
  {shippingAddress:FormDate} ,{
    headers:this.header
  } 
)}
getLoggedUserWishList(): Observable<any> {
  return this._HttpClient.get(`https://ecommerce.routemisr.com//api/v1/wishlist`,
  {headers : this.header});
}

AddWishList(productId:number):Observable<any>{
  return this._HttpClient.post(
    `https://ecommerce.routemisr.com/api/v1/wishlist`,
    { productId }, 
    {
        headers:this.header,
    }
  );
}

}
