import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {

  // lo que le pasa el padre al hijo
  @Input() tarea!:Tarea;
  // lo que le pasa el hijo al padre
  @Output() borrarTarea = new EventEmitter();
  constructor() { }

  eliminarTarea(id:string){
    this.borrarTarea.emit(id);
  }
}
