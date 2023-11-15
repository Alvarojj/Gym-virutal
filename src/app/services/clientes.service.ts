import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{cliente, membresia, entrenador, video, entrenamiento} from './../Models/cliente.model';
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


  guardarCliente(cliente:cliente):Observable<cliente>{
    const url = this.url+ 'cliente';
    return this.httpClient.post<cliente>(url,cliente)
  }

  loginEntrendaor(entrenador:entrenador):Observable<entrenador>{
    const url = this.url+ 'entrenador/login';
    return this.httpClient.post<entrenador>(url,entrenador)
  }

  seccionEntrenador(entrenador:entrenador):Observable<entrenador>{
    const url = this.url+ 'entrenador/seccion';
    return this.httpClient.post<entrenador>(url,entrenador)
    
  }


  crearEntrenador(entrenador:entrenador):Observable<entrenador>{
    const url = this.url+ 'entrenador';
    return this.httpClient.post<entrenador>(url,entrenador)
  }

  crearVideo(video:video):Observable<video>{
    const url = this.url + 'video';
    return this.httpClient.post<video>(url, video)
  }

  obtenerVideos(entrenador:entrenador):Observable<video[]>{
    const url = this.url + 'video/Entrenador';
    return this.httpClient.post<video[]>(url, entrenador)
  }

  ObtenerClientesEntrenador(cliente:cliente):Observable<cliente[]>{
    const url = this.url + 'cliente/entrenador';
    return this.httpClient.post<cliente[]>(url,cliente)
  }

  crearEntrenamiento(entreno:entrenamiento):Observable<entrenamiento>{
    const url = this.url + 'entrenamiento';
    return this.httpClient.post<entrenamiento>(url,entreno)
  }


  obtenerEntrenamiento(entreno:entrenamiento):Observable<entrenamiento>{
    const url = this.url + 'entrenamiento/cliente';
    return this.httpClient.post<entrenamiento>(url,entreno)
  }
}
