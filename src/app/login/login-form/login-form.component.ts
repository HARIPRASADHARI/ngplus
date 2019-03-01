import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginApiService } from '../../services/login-api.service';
import { StorageService } from '../../services/storage/storage.service';
import { Observable, Subject } from 'rxjs';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  observable$;
  subject$;
  location$;
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

  ngOnInit()  {
    
    this.login.getLocation().subscribe(res=>{
      console.log(res);
    })
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

  





  behavior() {
    this.subject$ = new Subject();
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

