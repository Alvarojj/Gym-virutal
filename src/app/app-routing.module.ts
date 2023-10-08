import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VistaEntrenadoresComponent} from './componentes/vista-entrenadores/vista-entrenadores.component'
import {InicioComponent} from './componentes/principal/inicio/inicio.component'
import {PerfilComponent} from './componentes/principal/perfil/perfil.component'

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
