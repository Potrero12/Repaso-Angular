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

  constructor(){
    this.titulo = 'Zapatillas';
    this.zapatillas = [
      new Zapatilla('Nike', 200, 'Nike', 'Azul', true),
      new Zapatilla('Jordan', 600, 'Jordan', 'Rojas', true),
      new Zapatilla('Reebook', 100, 'Reebook', 'Negras', false)
    ];
  }

  ngOnInit(): void {
    
  }
}
