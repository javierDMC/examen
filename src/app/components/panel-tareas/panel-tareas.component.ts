import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/models/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-panel-tareas',
  templateUrl: './panel-tareas.component.html',
  styleUrls: ['./panel-tareas.component.css']
})
export class PanelTareasComponent {

  tareas!:Tarea[];
  seleccionado:string = "Todas";

  constructor(private miRoute:ActivatedRoute , private miServicio:TareasService, private router:Router) { }

  ngOnInit(){
    this.tareas=this.miServicio.getTareas();

  }

  borrarTarea(id:string){
    this.miServicio.endTarea(id);
  }

}
