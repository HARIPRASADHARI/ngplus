import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareMaterialModule } from '../share-material/share-material.module';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShareMaterialModule,
    HttpClientModule
  ],
  declarations: [LoginFormComponent]
})
export class LoginModule { }
