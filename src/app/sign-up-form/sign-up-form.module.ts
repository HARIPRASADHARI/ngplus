import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpFormRoutingModule } from './sign-up-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SignUpFormRoutingModule
  ],
  declarations: [SignUpComponent]
})
export class SignUpFormModule { }
