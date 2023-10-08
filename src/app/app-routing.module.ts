import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {VistaSeleccionarEntrenadorComponent} from './componentes/vista-seleccionar-entrenador/vista-seleccionar-entrenador.component'
//import {InicioComponent} from './componentes/principal/inicio/inicio.component'

const routes: Routes = [
  /*{
    path: 'VistaSeleccionarEntrenador',
    component: VistaSeleccionarEntrenadorComponent
  },
  {
    path: 'Inicio',
    component: InicioComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
