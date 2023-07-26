import { Component, OnInit } from '@angular/core';

import { ZapatillaService } from '../services/zapatilla.service'; 

import { Zapatilla } from '../models/Zapatilla.model';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
  public titulo:string;
  public zapatillas:Array<Zapatilla> = [];
  public marcas:Array<String> = [];
  public color:string;
  public miMarca:string = '';

  constructor(
    private _zapatillaService: ZapatillaService
  ){
    this.titulo = 'Zapatillas';
    this.color = 'yellow';
    this.marcas = new Array();
  }

  ngOnInit(): void {
    this.zapatillas = this._zapatillaService.getZapatillas();
    console.log(this._zapatillaService.getTexto());
    
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
