import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Products } from 'src/app/core/shared/interfaces/products';
import { EcommerceDataService } from 'src/app/core/shared/services/ecommerce-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _EcommerceDataService: EcommerceDataService) { }


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
    items:1 ,
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
}
