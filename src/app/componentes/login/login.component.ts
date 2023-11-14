import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/Models/cliente.model';
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
  cliente?: cliente;
  perfil?:number;
  iniarSeccion(){
    
    let clien =     {
      "idPersona": {
          "correo": this.correo,
          "clave": this.clave
      }
    }
    this.clienteService.getClientes(clien)
    .subscribe(resp => {
      this.cliente = resp

      if(this.cliente == null){
        alert('Usuario o clave incorrecto')
      }
      else if(this.cliente != null){
          this.perfil = resp.idCliente
          localStorage.setItem('id', JSON.stringify(this.perfil));
          this.router.navigate(['/Inicio']) 
        }
        
    })



  }

}
