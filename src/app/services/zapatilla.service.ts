import { Injectable } from "@angular/core"; 

import { Zapatilla } from "../models/Zapatilla.model";

@Injectable()
export class ZapatillaService {
    public zapatillas:Array<Zapatilla> = [];

    constructor(){
        this.zapatillas = [
            new Zapatilla('Nike', 200, 'Nike', 'Azul', true),
            new Zapatilla('Jordan', 600, 'Jordan', 'Rojas', true),
            new Zapatilla('Reebook', 60, 'Reebook', 'Negras', true),
            new Zapatilla('Jeeze Spartan', 50, 'Jeeze', 'Negras', true)
          ];
    }

    getTexto(){
        return 'Hola Mundo desde un servicio';
    }

    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}