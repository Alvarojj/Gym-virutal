import { Component, OnInit } from '@angular/core';
import { membresia } from 'src/app/Models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-selecciona-plan',
  templateUrl: './selecciona-plan.component.html',
  styleUrls: ['./selecciona-plan.component.css']
})
export class SeleccionaPlanComponent implements OnInit{
  constructor(private clienteservice: ClientesService){

  }
  membresias:membresia[] = []
  ngOnInit(): void {
      this.clienteservice.getPlanes()
      .subscribe(resp => {
        this.membresias =resp
      })
  }
}
