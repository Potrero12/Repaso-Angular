import { Component,  OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'video-juego',
    templateUrl: './videojuego.component.html',
    styleUrls: ['./videojuego.component.css']
})
export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy{
    public title:string;
    public listado:string;

    constructor(){
        this.title = 'Video Juegos';
        this.listado = "Listado de los Juegos Populares";
        // console.log('constructor ejecutado...');
    }

    ngOnInit(): void {
        // console.log('Oninit ejecutado....');
    }

    ngDoCheck(): void {
        // console.log('DoCheck Ejecutado....');
    }

    ngOnDestroy(): void {
        // console.log('OnDestroyEjecutado');
    }

    cambiarTitulo(){
        this.title = 'Nuevo titulo';
    }
}