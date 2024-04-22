
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private _FormBuilder: FormBuilder, private _ActivatedRoute: ActivatedRoute, private _CartService: CartService) { }

  checkoutForm: FormGroup = this._FormBuilder.group({
    details: [''],
    phone: [''],
    city: ['']
  })

  cartId: any = '';

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        // console.log(params.get('id'));
        this.cartId = params.get('id');
      },
      error: () => {

      }
    })
  }

  handelFormCheckout(): void {
    // Router.navigate() because open url that return from backend, i must uses location or open method
    this._CartService.checkoutSession(this.cartId, this.checkoutForm.value).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          window.open(response.session.url, '_self') // or _blank to open url in new tab 
        }
      },
      error: () => {

      }
    })
  }
}
