// importar modulos ruouter angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import componentes
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { VideoJuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

// array de configuracion de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'cursos/:nombre/:apellido/:followers', component: CursosComponent},
    {path: 'video-juegos', component: VideoJuegoComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'externo', component: ExternoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

