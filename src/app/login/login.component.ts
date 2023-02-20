import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  inputUsuario!:string;
  inputPassword!:string;

  constructor(private servicioLogin:UserService, private miRouter:Router){}

  checkLogin(){
    let login={
      usuario:this.inputUsuario,
      password:this.inputPassword,
    }

  this.servicioLogin.checkLoginUser(login.usuario, login.password);
  this.miRouter.navigate(['']);
  }


}
