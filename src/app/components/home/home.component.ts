import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/core/shared/interfaces/products';
import { EcommerceDataService } from 'src/app/core/shared/services/ecommerce-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _EcommerceDataService: EcommerceDataService) { }



  products:Products[] = [];


  ngOnInit(): void {
    this._EcommerceDataService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response)
        this.products = response.data;
      },
      error: () => {

      }
    })
  }
}
