import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http'

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
import { FormsModule } from '@angular/forms';

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
    CrearCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
