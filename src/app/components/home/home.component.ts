import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/core/shared/interfaces/products';
import { CartService } from 'src/app/core/shared/services/cart.service';
import { EcommerceDataService } from 'src/app/core/shared/services/ecommerce-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _EcommerceDataService: EcommerceDataService, private _CartService: CartService, private _ToastrService: ToastrService) { }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
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
  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    items: 1,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   740: {
    //     items: 3
    //   },
    //   940: {
    //     items: 4
    //   }
    // },
    nav: true
  }


  products: Products[] = [];
  categories: any[] = [];


  searchTerm: string = ''

  ngOnInit(): void {
    this._EcommerceDataService.getAllProducts().subscribe({
      next: (response) => {
        // console.log(response)
        this.products = response.data;
      },
      error: () => {

      }
    })

    this._EcommerceDataService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response.data;
      },
      error: () => {

      }
    })
  }

  sendToAddToCart(productId: string): void {
    this._CartService.addToCart(productId).subscribe({
      next: (response) => {
        console.log(response)

        this._ToastrService.success(response.message, "title")
        // this._ToastrService.warning
        // this._ToastrService.error
      },
      error: (err) => {
        console.log(err)
      }
    })
  }



}
