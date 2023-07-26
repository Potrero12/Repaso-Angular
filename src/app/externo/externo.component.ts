import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit{
    public user:any;
    public userId:number;
    public fecha:any;

    public new_user:any;
    public usuario_guardado:any;

    constructor(
      private _peticionesService: PeticionesService
    ){
      this.userId = 1;
      this.new_user = {
                    "name": "",
                    "job": ""
                }
    }

    ngOnInit() {
      this.fecha = new Date();
      this.cargaUsuario();
    }

    cargaUsuario(){
      this.user = false;
      this.user = this._peticionesService.getUser(this.userId).subscribe(({data}) => {
        this.user = data;
        this.userId = data.id;
      });
    }

    // post es suscribir y response o asignar los valores
    guardarUsuario(form:any){
      this._peticionesService.addUser(this.new_user).subscribe(
        response => {
          this.usuario_guardado = response;

          form.reset();
        }, error => {
          console.log(error);
        }
      )
    }
}
