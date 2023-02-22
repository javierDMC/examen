import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {

  @Input() tarea!:Tarea;
  @Output() borrarTarea = new EventEmitter();
  constructor() { }

  eliminarTarea(id:string){
    this.borrarTarea.emit(id);
  }
}
