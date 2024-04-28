
import { Component, OnInit } from '@angular/core';

import { AllorderService } from '../../Service/allorder.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.css'
})
export class AllordersComponent implements OnInit {
  userId: string = '';
  orders: any[] = [];
  isLoading:boolean=false;
  constructor(private _AllorderService:AllorderService){

  }
  ngOnInit(): void {
    document.body.style.overflowX = 'hidden';
    this.isLoading = true;
    this._AllorderService.decodeUserToken();
    this._AllorderService.userData.subscribe({
      next: () => this.userId = this._AllorderService.userData.getValue().id
    });
  
   
    this.getAllOrders();
  }

  getAllOrders() {
    this._AllorderService.getAllUserOrders(this.userId).subscribe({
      next: response => {
        document.body.style.overflowX = 'hidden';
        this.isLoading = false;
        this.orders = response;
      },
      error: err => {
        console.log(err);
        this.isLoading = false;
      }
    })
  }
  
  }
