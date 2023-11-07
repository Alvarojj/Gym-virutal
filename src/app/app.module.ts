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
import { InicioEntrenadoresComponent } from './componentes/entrenadores/inicio-entrenadores/inicio-entrenadores.component';
import { LoginEntrenadoresComponent } from './componestes/entrenadores/login-entrenadores/login-entrenadores.component';
import { Menu2Component } from './componentes/entrenadores/menu2/menu2.component';


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
    InicioEntrenadoresComponent,
    LoginEntrenadoresComponent,
    Menu2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
