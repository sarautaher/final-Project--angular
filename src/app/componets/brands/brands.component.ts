import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit{
  Brands:any[]=[];
  isLoading: boolean = false;
constructor(private _ProductService:ProductService){

}
ngOnInit(): void {
  this._ProductService.getBrands().subscribe({
    next:(Brand)=>{
      this.isLoading=true;
this.Brands=Brand.data;
    }
  })
}

}
