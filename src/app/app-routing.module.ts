import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { GuardaLoginGuard } from './guards/guarda-login.guard';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { Seccion1Component } from './sections/seccion1/seccion1.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"login",component:LoginComponent},
  {path:"seccion1", component:Seccion1Component, canActivate:[GuardaLoginGuard]},
  {path:"**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
