import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{cliente} from './../Models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private httpClient: HttpClient) { 
    
  }


  getClientes(clientei: cliente): Observable<cliente>{
    const url = 'http://localhost:8080/cliente/login';
    return this.httpClient.post<cliente>(url, clientei);
  }

}
