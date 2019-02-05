import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/genericapi/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(
    private apiService: ApiService
  ) { }
  userSignUp(body?:any) {
    const signup = `${environment.base_url}/login`;
    return this.apiService.post(signup,body);
  }
  getGenres() {
    const getAllGenres = `${environment.base_url}/genres`;
    return this.apiService.get(getAllGenres);
  }
}
