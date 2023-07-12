import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private loadingService : LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.showLoadingSpinner();
    let req = request.clone({
      headers: request.headers.set("Authorization", "Bearer JWT")
    })
    return next.handle(req).pipe(
      finalize(() => {
        this.loadingService.hideLoadingSpinner();
      })
    )
  }
}
