import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { CartService } from '../../Service/cart.service';
import{products} from '../../product.js'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {
 // ProductS:products[]=[];
 ProductS:any[]=[]
  term:string = '';
  isLoading: boolean = false;
  searchedItem: string = ''
  constructor(private _ProductService:ProductService,private _CartService:CartService){

  }
addTocart( productId:string){
  this._CartService.AddTocart(productId).subscribe({
    next:(cart)=>{

      this._CartService.setcartNumber.next(cart.numOfCartItems);
     console.log( cart.data)
    },
    error:(error)=>{
      console.log(error)
    }
  })
}

  ngOnInit(): void {
    this._ProductService.product().subscribe({next:(product)=>{ this. isLoading = true;
    this.ProductS=product.data;
     }
  
  });
  }
addWish(productI:number){
  this._CartService.AddWishList(productI).subscribe({
    next:(h)=>{

    }
  })
}
}
