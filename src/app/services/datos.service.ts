import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  cliente: string[] = []
  idcliente:number = 0
  idVideo:number = 0
  constructor() { }

  get datos(){
    return [...this.cliente];
  }

  agregarDato(dato:any){
    this.cliente.push(dato);
  }


  limpiarcliente(){
    this.cliente = []
  }
  


  clienteSeleccionado(dato:number){
    this.idcliente = dato
  }


  videoSeleccionado(dato:number){
    this.idVideo = dato
  }
}
