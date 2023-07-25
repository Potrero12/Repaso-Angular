import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  public titulo:string;
  public nombre:string = '';
  public apellido:string = '';
  public followers:number = 0;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router
  ){
    this.titulo = 'Cursos Angular';
  }

  ngOnInit(): void {
    this._route.params.subscribe(({nombre, apellido, followers}: Params) => {
      this.nombre = nombre ?? '';
      this.apellido = apellido ?? '';
      this.followers = followers ?? 0;
      console.log(this.nombre, this.apellido, this.followers);
    })
    
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }
}
