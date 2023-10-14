import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VistaEntrenadoresComponent} from './componentes/vista-entrenadores/vista-entrenadores.component'
import {InicioComponent} from './componentes/principal/inicio/inicio.component'
import {PerfilComponent} from './componentes/principal/perfil/perfil.component'
import { RutinaComponent } from "./componentes/principal/rutina/rutina.component";

const routes: Routes = [
  {
    path: 'entrenadores',
    component: VistaEntrenadoresComponent
  },
  {
    path: 'Inicio',
    component: InicioComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'rutina',
    component: RutinaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
