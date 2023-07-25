import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public indentificado:boolean;

  constructor(){
    this.indentificado = false;
  }

  setIdentificado(){
    this.indentificado = true;
  }

  unsetIdentificado(){
    this.indentificado = false;
  }
}
