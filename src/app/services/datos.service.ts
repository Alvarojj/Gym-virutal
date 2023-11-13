import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  cliente: string[] = []
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
  
}
