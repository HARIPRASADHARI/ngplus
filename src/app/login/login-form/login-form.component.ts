import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginApiService } from '../../services/login-api.service';
import { StorageService } from '../../services/storage/storage.service';
import { Observable, BehaviorSubject, interval, of, fromEvent } from 'rxjs';
import { take, map, filter, mergeMap, switchMap } from 'rxjs/operators';
// declare variable
import * as mapboxgl from 'mapbox-gl';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  observable$;
  subject$;
  location$;
  vat;
  number$;
  timeCount$: Observable<any>;
  letters$;
  checkQuery;
  genresList;
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(
    private fb: FormBuilder,
    private login: LoginApiService,
    private storageService: StorageService,

  ) {
    this.loginForm = this.fb.group({
      'name': [''],
      'password': [''],
      'email': ['']
    });

  }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2FkMTloYXJpIiwiYSI6ImNqdGN6YWR5MTB6anU0YXA4NGpieGR4NHgifQ.m_QToLr3enpSd1Z-y0kRAw';
    // tslint:disable-next-line:no-shadowed-variable
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/navigation-preview-day-v2', // stylesheet location
      center: [-96, 37.8], // starting position [lng, lat]
      zoom: 3 // starting zoom
      });
      new mapboxgl.Popup({closeOnClick: false})
.setLngLat([-96, 37.8])
.setHTML('<h1>Hello World!</h1>')
.addTo(this.map);

    let c = Observable.create((observer) => {
      observer.next('KKKKKKKKKKKK');
    }).subscribe(res => console.log(res));

    // fromEvent(document, 'scroll').subscribe(res => console.log(res));

    this.timeCount$ = interval(1000);
    this.letters$ = of('J', 'I', 'OO');

    this.letters$.pipe(switchMap(x => this.timeCount$.pipe(take(5), map(i => i + x)))).subscribe(res => {
      console.log('lllllllllllllll', res);
    });

    // this.mergeMap$.pipe(take(2), map(i => i)).subscribe(res => console.log('pppppppppppppp', res));

    // const example = this.letters$.pipe(mergeMap(x => of(this.mergeMap$.pipe(take(5), map(i => i + x)))));
    // example.subscribe(res => {
    //   console.log('llllllllllllllllllllll', res);
    // });


    // this.letters$.mergeMap(x => {
    //   this.mergeMap$.pipe(take(5), map(i => i + x)).subscribe(res => {
    //     console.log(res);
    //   }, err => {

    //   });
    // });

    this.behavior();
    this.number$ = interval(1000);
    this.number$.pipe(
      take(15),
      filter((x: any) => x % 2 === 0),
      map((x: any) => x * 30),
      filter(x => x > 180)).subscribe(res => {
        this.vat = res;
        console.log(this.vat);
      }, err => {
        console.log(err);
      });
    console.log(';;;;;;;;;;;;;', this.number$);
    const observable = new Observable(observer => {
      setInterval(() => observer.next('hello from Observable!'), 1000);
      observer.complete();
    });

    observable.subscribe(v => console.log(v));


    this.login.getLocation().subscribe(res => {
      console.log(res);
    });

    let d = Observable.create(observer => {
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
    d.subscribe(res => {
      console.log(';;;;;;;;;;;;;;;;;', res);
    });

    this.getGeners();
    this.observable$ = Observable.create((observer) => {
      observer.next(1);

      observer.next(2);

      observer.next(3);
      observer.complete();
    });
    this.observable$.subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });




  }


  ngOnDestroy(): void {
    this.observable$.unsubscribe();
    this.subject$.unsubscribe();
  }




  behavior() {
    this.subject$ = new BehaviorSubject(800);
    this.subject$.subscribe(x => {
      console.log('sub', x);
    })
    this.subject$.next(2);
    this.subject$.next(3);
    this.subject$.next(4);
  }
  getGeners() {
    this.login.getGenres().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
  hasKeyValue(obj: Object, key) {
    return obj.hasOwnProperty(key) && obj[key] !== '';
  }
  searchQuery(evt) {
    console.log(evt);
    const data = {
      query: evt
    };
    //console.log('pppppppppppppppppp', this.hasKeyValue(data, 'query'));


    this.login.getSearchData(data).subscribe(res => {
    this.genresList = res['body'];
    }, err => {
      console.log(err);
    });
  }
  loginSubmit() {
    console.log(this.loginForm.value);
    this.login.userSignUp(this.loginForm.value).subscribe(res => {
      console.log('11111111111111111111111111111111111', res.headers);
      console.log('l;l;l', res.headers.get('Authorization'));
      this.storageService.setData('token', res.headers.get('Authorization'));
      setTimeout(() => {
        this.getGeners();
      }, 3000);

    }, err => {
      console.log(err);
    });
  }
  signIn() {
    console.log(this.loginForm.value);
    this.login.userSignIn(this.loginForm.value).subscribe(res => {
      console.log(res);
      //  this.storageService.setData('token', res.token);
      this.getGeners();

    }, err => {
      console.log(err);
    })
  }

}

