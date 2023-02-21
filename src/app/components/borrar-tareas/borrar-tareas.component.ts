import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/models/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-borrar-tareas',
  templateUrl: './borrar-tareas.component.html',
  styleUrls: ['./borrar-tareas.component.css']
})
export class BorrarTareasComponent {
  tareas!:Tarea[];
  seleccionado:string = "Todas";

  constructor(private miRoute:ActivatedRoute , private miServicio:TareasService, private router:Router) { }

  ngOnInit(){
    this.tareas=this.miServicio.getTareas();

  }

  borrarTarea(id:string){
    this.miServicio.deleteTareas(id);
  }


}
