import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  toastSuccess(msg: string) {
    this.toastr.success(msg);
  }
  toastInfo(msg: string) {
    this.toastr.info(msg);
  }
  toastErr(msg: string) {
    this.toastr.error(msg);
  }
  toastWarn(msg: string) {
    this.toastr.warning(msg);
  }
}
