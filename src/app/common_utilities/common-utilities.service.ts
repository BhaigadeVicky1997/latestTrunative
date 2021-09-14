import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilitiesService {

  constructor(private toastr: ToastrService) { }

  alertMessage(type, msg) {
    if (type == 'success') {
      this.toastr.success(msg);
    }
    else if (type == 'warning') {
      this.toastr.warning(msg);
    }
    else if (type == 'info') {
      this.toastr.info(msg);
    }
    else if (type == 'error') {
      this.toastr.error(msg);
    }
  }

}
