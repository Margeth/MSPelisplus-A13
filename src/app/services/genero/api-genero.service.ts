import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiGeneroService {
  readonly url = 'https://localhost:49153/api'; //

  constructor(private http:HttpClient) { //inyeccion de dependencia por constructor

  }

  getGeneros():Observable<any[]>{ //Consume API q tengo en netcore
    return this.http.get<any>(this.url + '/Generos');
  }

  getGenero(id:number):Observable<any>{
    return this.http.get<any>(this.url + `/Generos/${id}`);
  }

  addGenero(data:any) {
    return this.http.post(this.url + '/Generos', data);
  }

  updateGenero(id:number|string, data:any) {
    return this.http.put(this.url + `/Generos/${id}`, data);
  }

  deleteGenero(id:number|string) {
    return this.http.delete(this.url + `/Generos/${id}`);
  }

}
