import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VistaEntrenadoresComponent} from './componentes/vista-entrenadores/vista-entrenadores.component'
import {InicioComponent} from './componentes/principal/inicio/inicio.component'
import {PerfilComponent} from './componentes/principal/perfil/perfil.component'
import { RutinaComponent } from "./componentes/principal/rutina/rutina.component";
import { LoginComponent } from './componentes/login/login.component';

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
  },
  {
    path:'login',
    component: LoginComponent,
    
  },
  {
    path:'',
    component: LoginComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
