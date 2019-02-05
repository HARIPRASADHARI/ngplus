import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginApiService } from '../../services/login-api.service';


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
  ) {
    this.loginForm = this.fb.group({
      'name': [''],
      'password': ['']
    });
  }

  ngOnInit() {
    this.login.getGenres().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
  loginSubmit() {
    console.log(this.loginForm.value);
    this.login.userSignUp(this.loginForm.value).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }

}
