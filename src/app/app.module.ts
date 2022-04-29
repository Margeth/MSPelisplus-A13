import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewGenerosComponent } from './components/genero/view-generos/view-generos.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiGeneroService} from 'src/app/services/genero/api-genero.service';
import {ApiPeliculaService} from "./services/pelicula/api-pelicula.service";
import { ViewPeliculaComponent } from './components/pelicula/view-pelicula/view-pelicula.component';
import { AddUpdateGeneroComponent } from './components/genero/add-update-genero/add-update-genero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ViewGenerosComponent,
    ViewPeliculaComponent,
    AddUpdateGeneroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiGeneroService, ApiPeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
