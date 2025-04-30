import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoaderSeriveService } from './loader-serive.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private loaderService: LoaderSeriveService,
  ) {}

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   this.loaderService.show();
  //   console.log('interceptor--->', );
  //   return next.handle(req).pipe(
  //     finalize(() => this.loaderService.hide())
  //   );
  // }
  private activeRequests = 0;
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.loaderService.show();
    }
    this.activeRequests++;

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loaderService.hide();
        }
      }),
    );
  }

}