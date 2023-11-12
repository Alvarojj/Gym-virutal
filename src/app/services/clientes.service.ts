import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{cliente, membresia, entrenador} from './../Models/cliente.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private httpClient: HttpClient) { 
    
  }
  url = 'http://localhost:8080/';

  getClientes(clientei: cliente): Observable<cliente>{
    const url = this.url +'cliente/login';
    return this.httpClient.post<cliente>(url, clientei);
  }

  getInfoCliente(cliente: cliente): Observable<cliente>{
    const url = this.url +'cliente/informacion';
    return this.httpClient.post<cliente>(url, cliente);
  }

  getEntrenadores():Observable<entrenador[]>{
    const url = this.url +'entrenador';
    return this.httpClient.get<entrenador[]>(url)
  }

  getPlanes():Observable<membresia[]>{
    const url = this.url + 'membresia';
    return this.httpClient.get<membresia[]>(url)

  }
}
