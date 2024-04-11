import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommerceDataService } from 'src/app/core/shared/services/ecommerce-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute , private _EcommerceDataService:EcommerceDataService) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (parameters) => {
        let idProduct:any = parameters.get('id');

        this._EcommerceDataService.getProductDetails(idProduct).subscribe({
          next:(response)=>{
            
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
