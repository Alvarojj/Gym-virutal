import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/Models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-selecciona-usuario',
  templateUrl: './selecciona-usuario.component.html',
  styleUrls: ['./selecciona-usuario.component.css']
})
export class SeleccionaUsuarioComponent implements OnInit {
  constructor(private service: ClientesService, private serviceDato:DatosService, private router:Router) { }
  clientes: cliente[] = []
  ngOnInit(): void {
    let entre = {
      "entrenador": {
        "idEntrenador": Number(localStorage.getItem('idEntrenador'))
      }
    }
    this.service.ObtenerClientesEntrenador(entre)
    .subscribe(resp =>{
      this.clientes = resp
    })
  }




  seleccionarUsuario(dato:any){
    this.serviceDato.clienteSeleccionado(dato)
    this.router.navigate(['/crearEntrenamiento'])
  }
}
