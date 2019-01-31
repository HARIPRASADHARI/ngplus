import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [
  {
    path: '', component: GenericComponent,
    children: [
      {
        path: '', loadChildren: './login/login.module#LoginModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
