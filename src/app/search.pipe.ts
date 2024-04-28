import { products } from './product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product: products[], term: string): products[] {
    return product.filter((product) => {
      return product.title.toLowerCase().includes(term.toLowerCase());
    });
  }

}
