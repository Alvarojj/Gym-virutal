import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { video } from 'src/app/Models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DatosService } from 'src/app/services/datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecciona-video',
  templateUrl: './selecciona-video.component.html',
  styleUrls: ['./selecciona-video.component.css']
})
export class SeleccionaVideoComponent implements OnInit {
  constructor(private service: ClientesService, private sanitizer: DomSanitizer, private servicedato: DatosService, private router:Router) {

  }
  videos: video[] = []

  ngOnInit(): void {
    let entre = {
      "idEntrenador": Number(localStorage.getItem('idEntrenador'))
    }
    this.service.obtenerVideos(entre)
      .subscribe(resp => {
        console.log(resp)
        this.videos = resp
      })
  }

  rutaVideo?: string
  crearVideo() {
    let newVideo = {
      "path": this.rutaVideo,
      "entrenador": {
        "idEntrenador": localStorage.getItem('idEntrenador')
      }
    }


    this.service.crearVideo(newVideo)
      .subscribe(resp => {
        console.log(resp)
        window.location.reload();
      })


  }

  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  videoSeleccionado(dato: any) {
    this.servicedato.videoSeleccionado(Number(dato))
    this.router.navigate(['/crearEntrenamiento'])
  }
}
