import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareMaterialModule } from './share-material/share-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GenericComponent } from './generic/generic.component';



@NgModule({
  declarations: [
    AppComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareMaterialModule,
    FlexLayoutModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
