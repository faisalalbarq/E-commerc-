import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _CartService: CartService) { }

  cartDetails: any = {};

  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next: (response) => {
        this.cartDetails = response.data;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  removeCartItem(productId: string): void {
    this._CartService.removeItem(productId).subscribe({
      next: (response) => {
        // this.cartDetails = response.data;
      },
      error: (err) => {

      }
    })
  }

  changeCount(productId: string, count: number): void {
    if (count > 1) {
      this._CartService.updateCartProduct(productId, count).subscribe({
        next: (response) => {
          this.cartDetails = response.data;
        },
        error: (err) => {

        }
      })
    }
    else {
      this.removeCartItem(productId);
    }

  }
}
