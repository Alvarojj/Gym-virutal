import { Component, OnInit } from '@angular/core';
import { entrenador } from 'src/app/Models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-vista-entrenadores',
  templateUrl: './vista-entrenadores.component.html',
  styleUrls: ['./vista-entrenadores.component.css']
})
export class VistaEntrenadoresComponent implements OnInit {
  entrenadores:entrenador[] = []
  constructor(private clienteservice: ClientesService ){

  }
  ngOnInit(): void {

    this.clienteservice.getEntrenadores()
    .subscribe((resp) => {
      this.entrenadores = resp
    });

  }

}
