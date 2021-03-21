import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {

  public constructor(private messageService: MessageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError(requestError => {
          this.messageService.add({
            severity: 'error',
            summary: `Error - ${ requestError.status }`,
            detail: 'An error as occurred communicating with the API. Please try again.',
            life: 5000
          });
          return throwError(requestError);
        })
      );
  }
}
