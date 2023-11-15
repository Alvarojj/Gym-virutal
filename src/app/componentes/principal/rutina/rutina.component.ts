import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { entrenamiento } from 'src/app/Models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit {
  constructor(private service: ClientesService,private sanitizer: DomSanitizer) { }
  entreno?:entrenamiento
  nohay?:string
  ngOnInit(): void {
    let entreno = {
      "cliente": {
        "idCliente": Number(localStorage.getItem('id'))
      }
    }
    this.service.obtenerEntrenamiento(entreno)
    .subscribe(resp => {
      if(resp == null){
        this.nohay = 'No tienes rutinas asignadas para hoy'
      }else{
        this.entreno = resp
      }
     
    })
  }
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
