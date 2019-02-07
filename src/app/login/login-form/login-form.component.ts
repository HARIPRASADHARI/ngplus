import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginApiService } from '../../services/login-api.service';
import { StorageService } from '../../services/storage/storage.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private login: LoginApiService,
    private storageService: StorageService
  ) {
    this.loginForm = this.fb.group({
      'name': [''],
      'password': [''],
      'email': ['']
    });
  }

  ngOnInit() {
    this.getGeners();
  }
  getGeners(){
    this.login.getGenres().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
  loginSubmit() {
    console.log(this.loginForm.value);
    this.login.userSignUp(this.loginForm.value).subscribe(res => {
      console.log(res);
      
    }, err => {
      console.log(err);
    })
  }
  signIn() {
    console.log(this.loginForm.value);
    this.login.userSignIn(this.loginForm.value).subscribe(res => {
      console.log(res);
      this.storageService.setData('token', res.token);
      this.getGeners();

    }, err => {
      console.log(err);
    })
  }

}

