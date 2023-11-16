import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-crear-entrenamiento',
  templateUrl: './crear-entrenamiento.component.html',
  styleUrls: ['./crear-entrenamiento.component.css']
})
export class CrearEntrenamientoComponent implements OnInit {
  constructor(private serviceDato: DatosService, private servicioCliente:ClientesService, private router:Router) { }
  ngOnInit(): void {
      console.log(this.serviceDato.idVideo)
      if(this.serviceDato.idVideo > 0){
        this.selec = 'Seleccionado'
      }
      if(this.serviceDato.idcliente > 0){
        this.selec2 = 'Seleccionado'
      }
  }
  titulo?: string
  fecha?: string
  idvideo?: number = this.serviceDato.idVideo
  idcliente?: number = this.serviceDato.idcliente
  selec?:String
  selec2?:String


  crearEntrenamiento() {
    if (this.idcliente == 0 || this.idvideo == 0) {
      alert('Falta seleccionar video o cliente')
    } else {
      let entre = {
        "titulo": this.titulo,
        "fechaEntreno": this.fecha,
        "bitVisto": 0,
        "cliente": {
          "idCliente": this.idcliente
        },
        "entrenador": {
          "idEntrenador": Number(localStorage.getItem('idEntrenador'))
        },
        "video": {
          "idVideo": this.idcliente
        }
      }

      this.servicioCliente.crearEntrenamiento(entre)
      .subscribe(resp =>{
        console.log(resp)
      })

    }
    this.router.navigate(['/inicio/entrenador'])
  }
}
