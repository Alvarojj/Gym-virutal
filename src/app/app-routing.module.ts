import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VistaSeleccionarEntrenadorComponent} from './Componentes/vista-seleccionar-entrenador/vista-seleccionar-entrenador.component'

const routes: Routes = [
  {
    path: 'VistaSeleccionarEntrenador',
    component: VistaSeleccionarEntrenadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
