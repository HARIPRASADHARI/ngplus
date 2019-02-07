import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private storageService: StorageService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token;
    const get_token = this.storageService.getData('token');
    if (get_token) {
      console.log(get_token);
      token =  request.clone({
        setHeaders:{
          'Authorization': 'Bearer' + get_token
        }
      })
    }
    else{
      token = request.clone({
        setHeaders:{

        }
      })
    }
    return next.handle(token);
  }
}
