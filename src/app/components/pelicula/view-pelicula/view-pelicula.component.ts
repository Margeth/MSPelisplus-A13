import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ApiPeliculaService} from 'src/app/services/pelicula/api-pelicula.service';
import {ApiGeneroService} from 'src/app/services/genero/api-genero.service'

@Component({
  selector: 'app-view-pelicula',
  templateUrl: './view-pelicula.component.html',
  styleUrls: ['./view-pelicula.component.css']
})
export class ViewPeliculaComponent implements OnInit {

  pelicula$!:Observable<any[]>;
  generos:any = [];
  generosmap:Map<number,string> = new Map<number, string>();

  constructor(private apiPeliculaService:ApiPeliculaService, private apiGeneroService:ApiGeneroService) {

  }

  generosMap(){
    this.apiGeneroService.getGeneros().subscribe(
      data=> {
        this.generos=data;
        for (let i=0; i< data.length;i++){
          this.generosmap.set(this.generos[i].id,this.generos[i].name);
        }
      }

    );
  }

  ngOnInit(): void {
    this.pelicula$ = this.apiPeliculaService.getPeliculas();
    this.generosMap();

  }


}
