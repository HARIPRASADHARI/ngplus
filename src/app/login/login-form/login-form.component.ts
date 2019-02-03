import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      'username': [''],
      'password': ['']
    });
  }

  ngOnInit() {
  }
  loginSubmit() {
  }

}
