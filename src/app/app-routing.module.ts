import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VistaEntrenadoresComponent} from './componentes/vista-entrenadores/vista-entrenadores.component'
import {InicioComponent} from './componentes/principal/inicio/inicio.component'
import {PerfilComponent} from './componentes/principal/perfil/perfil.component'
import { RutinaComponent } from "./componentes/principal/rutina/rutina.component";
import { SeleccionaPlanComponent } from './componentes/selecciona-plan/selecciona-plan.component';
import { LoginComponent } from './componentes/login/login.component';
import {CrearCuentaComponent} from './componentes/crear-cuenta/crear-cuenta.component';

const routes: Routes = [
  {
    path: 'Selecciona_plan',
    component: SeleccionaPlanComponent
  },
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
    
  },
  {
    path:'crearcuenta',
    component: CrearCuentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
