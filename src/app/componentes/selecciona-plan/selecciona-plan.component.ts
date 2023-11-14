import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { cliente, membresia } from 'src/app/Models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-selecciona-plan',
  templateUrl: './selecciona-plan.component.html',
  styleUrls: ['./selecciona-plan.component.css']
})
export class SeleccionaPlanComponent implements OnInit {
  constructor(private clienteservice: ClientesService, private datos:DatosService, private router:Router) {

  }
  dato:any[] = this.datos.cliente
  membresias: membresia[] = []
  ngOnInit(): void {
    this.clienteservice.getPlanes()
      .subscribe(resp => {
        this.membresias = resp
      })
  }

  guardarCliente(id: any) {
    let clien = {
      "idPersona": {
        "nombre": this.dato[0],
        "apellido": this.dato[1],
        "peso": this.dato[5],
        "estatura": this.dato[6],
        "fechaNacimiento": this.dato[4],
        "descripcion": this.dato[7],
        "correo": this.dato[2],
        "clave": this.dato[3]
      },
      "membresia": {
        "idMembresia": id
      },
      "entrenador": {
        "idEntrenador": this.dato[8]
      }
    }


    this.clienteservice.guardarCliente(clien)
      .subscribe(resp => {
        console.log(resp)
      })

    this.datos.limpiarcliente()  
    this.router.navigate(['/'])
  }
}
