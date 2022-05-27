import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

import { LoaderService } from './general/loader/loader.service';
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private _loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this._loaderService.ShowLoader();
    return next.handle(request).pipe(
      tap(
        req => {
          if (req instanceof HttpResponse) {
            this._loaderService.HideLoader();
          }
        },
        err => {
          this._loaderService.HideLoader();
        }
      )
    );
  }
}
