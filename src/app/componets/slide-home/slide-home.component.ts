import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slide-home',
  templateUrl: './slide-home.component.html',
  styleUrl: './slide-home.component.css'
})
export class SlideHomeComponent {
  img:any[]=["../../assets/img/slider-2.jpeg",'../../assets/img/main-slider-1.jpeg' ,'../../assets/img/main-slider-2.jpeg','../../assets/img/main-slider-3.jpeg'];
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
      
    },
    nav: true
  }
}
