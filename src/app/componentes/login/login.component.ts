import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private clienteService: ClientesService, private router: Router ){

  }

  ngOnInit(): void{  }

  correo?: string;
  clave?: string;

  iniarSeccion(){
    let cliente = null
    let clien =     {
      "idPersona": {
          "correo": this.correo,
          "clave": this.clave
      }
    }
    this.clienteService.getClientes(clien)
    .subscribe(resp => {
      cliente = resp
      if(cliente == null){
        alert('Usuario o clave incorrecto')
      }else if(cliente != null){
          this.router.navigate(['/Inicio']) 
        }
    })
  }
}
