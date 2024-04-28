import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../Service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit  {
  ProductS:any;
  productId:any;
  isLoading: boolean = false;
  constructor(private _ProductService:ProductService, private _ActivatedRoute:ActivatedRoute,private _CartService:CartService ){

  }
  addTocart( productId:string){
    this._CartService.AddTocart(productId).subscribe({
      next:(cart)=>{
        this._CartService.setcartNumber.next(cart.numOfCartItems);
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
this.productId=params.get('id');
    });
    this._ProductService.productDetails(this.productId).subscribe({next:(product)=>{this.isLoading=true;
      this.ProductS=product.data;
       }
    
    });
  }
}
