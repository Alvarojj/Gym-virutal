import { Component, OnInit, ViewChild } from '@angular/core';
import { entrenador } from 'src/app/Models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { Route, Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-vista-entrenadores',
  templateUrl: './vista-entrenadores.component.html',
  styleUrls: ['./vista-entrenadores.component.css']
})
export class VistaEntrenadoresComponent implements OnInit {
  entrenadores:entrenador[] = []
  constructor(private clienteservice: ClientesService,private router:Router, private datos:DatosService ){

  }
  id?:Number
  ngOnInit(): void {

    this.clienteservice.getEntrenadores()
    .subscribe((resp) => {
      this.entrenadores = resp
    });
    
  }
  seleccionaEntrenador(idEntrenador:any){
    this.id = idEntrenador
    this.datos.agregarDato(this.id)
    this.router.navigate(['\Selecciona_plan'])
  }
}
