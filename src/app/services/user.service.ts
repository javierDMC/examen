import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users:Array<User>=[
    {
      usuario:"javi",
      password:"123",
      login:0
    },
    {
      usuario:"pepe",
      password:"123",
      login:0
    },
    {
      usuario:"salva",
      password:"123",
      login:0
    },
  ]

  checkLoginUser(usuarioFormulario:string, passwordFormulario:string){
    const usuarioEncontrado = this.users.find((user) => user.usuario === usuarioFormulario);
    const passwordEncontrao = this.users.find((user) => user.password === passwordFormulario);
    if(usuarioEncontrado && passwordEncontrao){
      let pos=this.users.findIndex(u=>u.usuario==usuarioFormulario);
      this.users[pos].login=1;
      window.confirm("¡Bievenido " + usuarioEncontrado.usuario + "!");
      // alert("¡Bievenido " + usuarioEncontrado.usuario + "!");
    }
    console.log(usuarioEncontrado);
  }

  getUser(){
    if(this.users.find(user=>user.login === 1)){
      return true;
    }else{
      return false;
    }

  }

}
