import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { entrenador } from 'src/app/Models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-perfil-entrenador',
  templateUrl: './perfil-entrenador.component.html',
  styleUrls: ['./perfil-entrenador.component.css']
})
export class PerfilEntrenadorComponent implements OnInit {

  constructor(private service:ClientesService, private router:Router){}
  id?: any
  entreador?:entrenador
  ngOnInit(): void {
    this.id = localStorage.getItem('idEntrenador')

    let entre = {
      "idEntrenador": this.id
    }

    this.service.seccionEntrenador(entre)
    .subscribe(resp => {
      this.entreador = resp
    })
  }



  cerrarSeccion(){
    localStorage.removeItem('idEntrenador')
    this.router.navigate(['/login/entrenador'])
  }
}
