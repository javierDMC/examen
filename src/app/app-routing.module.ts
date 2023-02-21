import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrarTareasComponent } from './components/borrar-tareas/borrar-tareas.component';
import { FinalizarTareaComponent } from './components/finalizar-tarea/finalizar-tarea.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { BorrarGuardaGuard } from './guards/borrar-guarda.guard';

const routes: Routes = [
  {path:"inicio", component:InicioComponent},
  {path:"tareas", component:TareasComponent},
  {path:"borrarTareas", canActivate:[BorrarGuardaGuard],component:BorrarTareasComponent},
  {path:"finalizarTarea/:id", component:FinalizarTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
