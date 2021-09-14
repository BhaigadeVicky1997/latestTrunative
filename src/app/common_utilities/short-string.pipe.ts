import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortString'
})
export class ShortStringPipe implements PipeTransform {

  transform(value: any): string {
    return value.substr(0, 20) + '....';
  }

}
