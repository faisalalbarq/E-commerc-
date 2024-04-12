import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/core/shared/interfaces/products';
import { EcommerceDataService } from 'src/app/core/shared/services/ecommerce-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute , private _EcommerceDataService:EcommerceDataService) { }


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
