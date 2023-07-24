import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'aprendiendo-angular';
  public mostrarVideoJuego:boolean = true;
  public descripcion:string;
  public letra:string;
  public fondo:string;

  constructor(){
    // this.title = configuracion.titulo;
    // this.descripcion = configuracion.descripcion;
    this.descripcion = 'Aprendiendo Angular';
    this.letra = configuracion.letra;
    this.fondo = configuracion.fondo;
  }

  ocultarVideoJuego(value:boolean){
    this.mostrarVideoJuego = value;
  }
}
