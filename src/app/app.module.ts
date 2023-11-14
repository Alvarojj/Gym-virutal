import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/principal/menu/menu.component';
import { InicioComponent } from './componentes/principal/inicio/inicio.component';
import { VistaEntrenadoresComponent } from './componentes/vista-entrenadores/vista-entrenadores.component';
import { PerfilComponent } from './componentes/principal/perfil/perfil.component';
import { RutinaComponent } from './componentes/principal/rutina/rutina.component';
import { SeleccionaPlanComponent } from './componentes/selecciona-plan/selecciona-plan.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { CrearEntrenamientoComponent } from './componentes/entrenadores/crear-entrenamiento/crear-entrenamiento.component';
import { Menu2Component } from './componentes/entrenadores/menu2/menu2.component';
import { PerfilEntrenadorComponent } from './componentes/entrenadores/perfil-entrenador/perfil-entrenador.component';
import { SeleccionaUsuarioComponent } from './componentes/entrenadores/selecciona-usuario/selecciona-usuario.component';
import { SeleccionaVideoComponent } from './componentes/entrenadores/selecciona-video/selecciona-video.component';
import { InicioEntrenadoresComponent } from './componentes/entrenadores/inicio-entrenadores/inicio-entrenadores.component';
import { LoginEntrenadoresComponent } from './componentes/entrenadores/login-entrenadores/login-entrenadores.component';
import { RegistrarEntrenadorComponent } from './componentes/entrenadores/registrar-entrenador/registrar-entrenador.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    VistaEntrenadoresComponent,
    PerfilComponent,
    RutinaComponent,
    SeleccionaPlanComponent,
    LoginComponent,
    CrearCuentaComponent,
    CrearEntrenamientoComponent,
    Menu2Component,
    PerfilEntrenadorComponent,
    SeleccionaUsuarioComponent,
    SeleccionaVideoComponent,
    InicioEntrenadoresComponent,
    LoginEntrenadoresComponent,
    RegistrarEntrenadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
