import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { HomeComponent } from './home/home.component';
import { VideoJuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';

import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CalculadoraPipe,
    ExternoComponent,
    HomeComponent,
    VideoJuegoComponent,
    ZapatillasComponent,
    ContactoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
