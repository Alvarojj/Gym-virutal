import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/principal/menu/menu.component';
import { InicioComponent } from './componentes/principal/inicio/inicio.component';
import { VistaEntrenadoresComponent } from './componentes/vista-entrenadores/vista-entrenadores.component';
import { PerfilComponent } from './componentes/principal/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    VistaEntrenadoresComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
