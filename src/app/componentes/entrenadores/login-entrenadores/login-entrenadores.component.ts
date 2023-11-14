import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-login-entrenadores',
  templateUrl: './login-entrenadores.component.html',
  styleUrls: ['./login-entrenadores.component.css']
})
export class LoginEntrenadoresComponent {
  constructor(private service:ClientesService, private router:Router){
  }
  correo?: string;
  clave?: string;
  perfil?:number;

  iniciarSeccion() {
    let entre = {
      "idPersona": {
        "correo": this.correo,
        "clave": this.clave
      }
    }

    this.service.loginEntrendaor(entre)
    .subscribe(resp => {
      console.log(resp)
      if(resp == null){
        alert('Usuario o clave incorrecto')
      }
      else if(resp != null){
        this.perfil = resp.idEntrenador
        localStorage.setItem('idEntrenador', JSON.stringify(this.perfil))
        this.router.navigate(['/inicio/entrenador'])
      }
    })

  }
}
