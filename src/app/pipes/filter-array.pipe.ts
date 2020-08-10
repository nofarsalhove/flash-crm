import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})

// Pipe for the searching
export class FilterArrayPipe implements PipeTransform {
  transform(arr: Array<object>, property: string, term: string): Array<any> {
    return arr.filter(item =>
      item[property].toUpperCase().includes(term.toUpperCase())
    );
  }
}
