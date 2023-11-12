import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';
import { cliente } from 'src/app/Models/cliente.model';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  constructor(private clienteService: ClientesService, private router: Router  ){

  }


  id?:any;
  cliente?: cliente;


  ngOnInit(): void{ 

    this.id = localStorage.getItem('id');

    let clien =     {
      "idCliente": this.id
    }
    this.clienteService.getInfoCliente(clien)
    .subscribe(resp => {
      this.cliente = resp
    })
  }

  cerraSeccion(){
    localStorage.removeItem('id')
    this.router.navigate(['']) 
  }

}
