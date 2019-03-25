import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/genericapi/api.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(
    private apiService: ApiService
  ) { }
  userSignUp(body?: any) {
    const signup = `${environment.base_url}/login`;
    return this.apiService.post(signup, body);
  }
  userSignIn(body?: any) {
    const signIn = `${environment.base_url}/signin`;
    return this.apiService.post(signIn, body);
  }
  getGenres() {
    const getAllGenres = `${environment.base_url}/genres`;
    return this.apiService.get(getAllGenres);
  }
  getSearchData(data?: any) {
    const getUser = `${environment.base_url}/genres/search`;
    return this.apiService.post(getUser, data);
  }
  getLocation(): Observable<any> {
    return Observable.create(observer => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next(position);
            observer.complete();
          },
          (error) => observer.error(error),
          {
            enableHighAccuracy: true
          }
        );
      } else {
        observer.error('Unsupported Browser');
      }
    });
  }

}
