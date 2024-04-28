import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AllorderService } from '../../Service/allorder.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  cartId: string | null = '';
  constructor(private _AllorderService:AllorderService,  private _ActivatedRoute: ActivatedRoute){

  }
  shippingAddress :FormGroup=new FormGroup({
    details:new FormControl(null),
    city:new FormControl(null),
    phone:new FormControl(null)

  });
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => this.cartId = params.get('cartId'))
  }
  CheckoutPayment(){
this._AllorderService.checkOut(this.cartId,this.shippingAddress.value).subscribe({
  next: (response) => {
   
    if (response.status == "success" ) {
      window.open(response.session.url);
    }
  },error:(err)=>{console.log(err)}
})
  }
}
