import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }
  public get(url: string): Observable<any> {
    return this.http.get(url);
  }
  public post(url: string, body?: Object): Observable<any> {
    return this.http.post(url, body);
  }
  public delet(url: string, body?: Object): Observable<any> {
    return;
  }
  public put(url: string, body?: Object): Observable<any> {
    return;
  }
}
