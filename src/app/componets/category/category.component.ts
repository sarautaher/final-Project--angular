import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  Category:any[]=[];
  isLoading: boolean = false;
constructor( private _ProductService:ProductService){}
ngOnInit(): void {
  this._ProductService.getCategory().subscribe({next:(category)=>{
    this.isLoading=true;
this.Category=category.data;
  }})
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}
}
