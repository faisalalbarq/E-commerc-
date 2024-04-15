import { Products } from './../interfaces/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Product: Products[], term: string): Products[] {
    return Product.filter((item) => item.title.toLowerCase().includes(term.toLowerCase()));
  }

}
