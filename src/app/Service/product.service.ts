import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }
  product():Observable<any>{
  return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  productDetails(ProductsId:string):Observable<any>{
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${ProductsId}`);
    }
    getCategory():Observable<any>{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    }
    getBrands():Observable<any>{
      return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    }
}
