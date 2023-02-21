import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/models/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-finalizar-tarea',
  templateUrl: './finalizar-tarea.component.html',
  styleUrls: ['./finalizar-tarea.component.css']
})
export class FinalizarTareaComponent {

  constructor(private miRoute:ActivatedRoute , private miServicio:TareasService, private router:Router) { }

  id!:string;
  tarea!:Tarea;

  ngOnInit(){
    this.id = this.miRoute.snapshot.params['id'];
    this.tarea = this.miServicio.getTarea(this.id);
  }

  finalizame(){
    this.miServicio.endTarea(this.id);
    this.router.navigate(["/tareas"]);
  }
}
