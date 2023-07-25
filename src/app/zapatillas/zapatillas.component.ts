import { Component, OnInit } from '@angular/core';

import { Zapatilla } from '../models/Zapatilla.model';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit{
  public titulo:string;
  public zapatillas:Array<Zapatilla> = [];
  public marcas:Array<String> = [];
  public color:string;
  public miMarca:string = '';

  constructor(){
    this.titulo = 'Zapatillas';
    this.color = 'yellow';
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla('Nike', 200, 'Nike', 'Azul', true),
      new Zapatilla('Jordan', 600, 'Jordan', 'Rojas', true),
      new Zapatilla('Reebook', 60, 'Reebook', 'Negras', true),
      new Zapatilla('Jeeze Spartan', 50, 'Jeeze', 'Negras', true)
    ];
  }

  ngOnInit(): void {
    this.getMarcas();
  }

  getMarcas(){
    this.zapatillas.forEach((zapatilla) => {
      if(this.marcas.indexOf(zapatilla.marca) < 0){
        this.marcas.push(zapatilla.marca);
      }
    })
  }

  getMarca(){
    alert(this.miMarca);
  }

  addMarca(){
      this.marcas.push(this.miMarca);
      this.miMarca = '';
  }

  borrarMarca(indice:any){
    this.marcas.splice(indice, 1); //borrar elementos de un array
  }

  onBlur(){
    console.log('haz salido del input');
  }

  onKeyUpEnter(){
    alert(this.miMarca);
  }
}
