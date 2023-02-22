import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  tareas!:Tarea[];
  totales!:any;
  seleccionado:string = "Todas";

  constructor(private service:TareasService){}

  ngOnInit(){
    this.tareas=this.service.getTareas();
    this.totales=this.service.getTotales();
  }

  filtrarTareas(){
    if(this.seleccionado != "Todas"){
      this.tareas = this.service.filtrarTareas(this.seleccionado);
    }else{
      this.tareas = this.service.getTareas();
    }
  }
}
