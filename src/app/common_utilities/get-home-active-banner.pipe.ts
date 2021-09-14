import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getHomeActiveBanner'
})

export class GetHomeActiveBannerPipe implements PipeTransform {

  transform(value: any): any {
    if (value.lenght === 0) {
      return value;
    }
    else {
      let activeBanner = [];
      for (let val of value) {
        if (val['status'] == false) {
          activeBanner.push(val);
        }
      }
      return activeBanner;
    }
  }
}
