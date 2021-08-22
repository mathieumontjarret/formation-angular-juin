import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(val: any, tva?: boolean): number {
    // console.log(value);
    // console.log(args);
    if (tva) {
      return val.totalTTC();
    }
    return val.totalHT();
  }
}
