import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Products } from 'src/app/core/shared/interfaces/products';
import { EcommerceDataService } from 'src/app/core/shared/services/ecommerce-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute , private _EcommerceDataService:EcommerceDataService) { }


  productSlider: OwlOptions = {
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





  productDetails:Products = {} as Products;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (parameters) => {
        let idProduct:any = parameters.get('id');
        console.log(idProduct);
        this._EcommerceDataService.getProductDetails(idProduct).subscribe({
          next:(response)=>{
            this.productDetails = response.data;
          },
          error:()=>{
            
          }
        })
      },
      error: () => {

      }
    })
  }
}
