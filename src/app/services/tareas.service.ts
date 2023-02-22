import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  // Password para acceder a Panel de Tareas

  password:string="123456"

  // Listado de tareas para el servicio. Definir el tipo de datos adecuado de la lista de tareas

  tareas:Tarea[] =  [
    {
    id:'1',
    nombre: 'Examen Cliente',
    estado: 'Pendiente'
    },
    {
    id:'2',
    nombre: 'Examen Servidor',
    estado: 'Pendiente'
    },
    {
    id:'3',
    nombre: 'Examen Interfaces',
    estado: 'Realizada'
    },
    {
    id:'4',
    nombre: 'Examen Despliegue',
    estado: 'Pendiente'
    },
    {
    id:'5',
    nombre: 'Examen EEIE',
    estado: 'Pendiente'
    },
    {
    id:'6',
    nombre: 'Ingles',
    estado: 'Realizada'
    }
 ];

  getTareas(){
    return this.tareas;
  }
  getTarea(id:string){
    let pos = this.tareas.findIndex(t => t.id == id);
    return this.tareas[pos];
  }

  endTarea(id:string){
    let tareaIndex = this.tareas.findIndex(t=> t.id == id);
    let tarea = this.tareas[tareaIndex];
    tarea.estado = "Realizada";
    return true;
  }

  getTotales(){
    return  {
      "totRealizadas":this.tareas.filter(t => t.estado == "Realizada").length,
      "totPendientes":this.tareas.filter(t => t.estado == "Pendiente").length
    }
  }
  filtrarTareas(estado:string){
    return this.tareas.filter(t=>t.estado==estado);
  }

  getPassword(){
    return this.password;
  }
}
