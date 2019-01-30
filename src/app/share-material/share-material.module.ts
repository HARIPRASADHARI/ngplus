import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatButtonModule, MatCheckboxModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule
  ],
  declarations: []
})
export class ShareMaterialModule { }
