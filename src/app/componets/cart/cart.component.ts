import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  products:any=null;
  cartId:string = "";
 
  constructor(private _CartService:CartService){

  }
  ngOnInit(): void {
    this._CartService.getTocart().subscribe({
      next:(res)=>{
this.products=res.data;
this.cartId = res.data._id;
this._CartService.setcartNumber.next(res.numOfCartItems);

      },error:(err)=>{
        console.log(err)
      }
    })
  }
  Remove(productId:string){
    this._CartService.DeleteCart(productId).subscribe({
      next:(res)=>{
       this._CartService.setcartNumber.next(res.numOfCartItems);
        this.products=res.data;
       
              },error:(err)=>{
                console.log(err)
              }
    })
  }
  update(productId:string,count:number){
    if(count==0){
     this.Remove(productId);
    }
    else{
    this._CartService.UpdataCart(productId,count).subscribe({ next:(res)=>{
      this.products=res.data;
      
            },error:(err)=>{
              console.log(err)
            }
  })
}

}

  }

