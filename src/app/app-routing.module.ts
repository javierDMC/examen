import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizarTareaComponent } from './components/finalizar-tarea/finalizar-tarea.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PanelTareasComponent } from './components/panel-tareas/panel-tareas.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { PanelGuardaGuard } from './guards/panel-guarda.guard';

const routes: Routes = [
  {path:"inicio", component:InicioComponent},
  {path:"tareas", component:TareasComponent},
  {path:"panelTareas", canActivate:[PanelGuardaGuard],component:PanelTareasComponent},
  {path:"finalizarTarea/:id", component:FinalizarTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
