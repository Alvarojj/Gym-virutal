import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-registrar-entrenador',
  templateUrl: './registrar-entrenador.component.html',
  styleUrls: ['./registrar-entrenador.component.css']
})
export class RegistrarEntrenadorComponent {
  constructor(private service:ClientesService){}
  nombre: string = ''
  apellido: string = ''
  correo: string = ''
  contra1?: string
  contra2?: string
  fechaNa: string = ''
  peso?: number
  estatura?: number
  descripcion: string = ''

  crearCliente() {
    if (this.contra1 == this.contra2) {
      let newEntrenador = {
        "idPersona": {
          "nombre": this.nombre,
          "apellido": this.apellido,
          "peso": this.peso,
          "estatura": this.estatura,
          "fechaNacimiento": this.fechaNa,
          "descripcion": this.descripcion,
          "correo": this.correo,
          "clave": this.contra1
        }
      }

      this.service.crearEntrenador(newEntrenador)
      .subscribe(resp => {
        console.log("Guardado" + resp)
      })



    } else {
      alert('Las contaseñas no coinciden')
    }
  }
}
