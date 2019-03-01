import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [
  {
    path: '', loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'signup', loadChildren: './sign-up-form/sign-up-form.module#SignUpFormModule'
  },
  {
    path: 'genres', loadChildren: './genres/genres.module#GenresModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
