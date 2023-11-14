import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/Models/cliente.model';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  constructor(private router:Router, private dato:DatosService){}
  nombre: string = ''
  apellido: string = ''
  correo: string = ''
  contra1?: string
  contra2?: string
  fechaNa: string = ''
  peso?: number
  estatura?: number
  descripcion: string = ''

  cliente?: cliente

  crearCliente() {
    if(this.contra1 == this.contra2){
      this.dato.agregarDato(this.nombre);
      this.dato.agregarDato(this.apellido);
      this.dato.agregarDato(this.correo);
      this.dato.agregarDato(this.contra1);
      this.dato.agregarDato(this.fechaNa);
      this.dato.agregarDato(this.peso);
      this.dato.agregarDato(this.estatura);
      this.dato.agregarDato(this.descripcion);
      this.router.navigate(['/entrenadores'])
    }else{
      alert('Las contaseñas no coinciden')
    }
  }

}
