import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TareasService } from '../services/tareas.service';

@Injectable({
  providedIn: 'root'
})
export class PanelGuardaGuard implements CanActivate {

  constructor(private miServicio: TareasService){};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let password:String;

    let confirmacion = prompt("Dime...");

    password=this.miServicio.getPassword();

    if(confirmacion==password){
      return true;
    }else{
      return false;
    }
  }

}
