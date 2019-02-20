import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import {mergeMap, tap} from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private options = {};
  private CSRF_URL = environment.base_url;
    private cache: any = {};
  constructor(
    private http: HttpClient
  ) { }
  public get(url: string): Observable<any> {
    return this.http.get(url);
  }
  public post(url: string, body?: Object): Observable<any> {
  //   return this.head(url).pipe(mergeMap(args => {
  //     let csrfToken;
  //     if (args.headers) {
  //         csrfToken = args.headers.get('Access-Control-Allow-Headers');
  //     }
  //     let headers = new HttpHeaders();
  //     headers = headers.append('Access-Control-Allow-Headers', csrfToken);
  //     return this.http.post<any>(url, body, { headers });
  // }));
    // tslint:disable-next-line:max-line-length
    return this.http.post(url, body, { observe: 'response' }).pipe(tap(resp=>console.log('Authorization', resp.headers.get('ReturnStatus'))));
  }
  public delet(url: string, body?: Object): Observable<any> {
    return;
  }
  public put(url: string, body?: Object): Observable<any> {
    return;
  }


  public head(url: string, query?: Object): Observable<any> {
    this.options['observe'] = 'response';
    return this.http.head<any>(url, this.options);
    // return this.httpClient.get<any>(url, { params: <HttpParams>query, observe: 'response' });
}

}
