import { Component, OnInit } from '@angular/core';
import {ApiGeneroService} from 'src/app/services/genero/api-genero.service'; //1. importacion del servicio
import {Observable} from "rxjs";
@Component({
  selector: 'app-view-generos',
  templateUrl: './view-generos.component.html',
  styleUrls: ['./view-generos.component.css']
})
export class ViewGenerosComponent implements OnInit {
  generos$!:Observable<any[]>; //Variable local, la cual almacenará la info del servicio
  genero:any;



  constructor(private apiGenero:ApiGeneroService) { //inyectando la dependecia por constructor, para poder consumir el servicio

  }

  ngOnInit(): void {
  this.generos$ = this.apiGenero.getGeneros(); //Llamando al metodo de mi servicio,por fin tengo info 7u7

  }

  // Variables (properties)
  modalTitle:string = '';
  activateAddEditGeneroComponent:boolean = false;
  inspection:any;

  modalAdd() {
    this.inspection = {
      id:0,
      status:null,
      comments:null,
      inspectionTypeId:null
    }
    this.modalTitle = "Add Genero";
    this.activateAddEditGeneroComponent = true;
  }

  modalEdit(item:any) {
    this.genero = item;
    this.modalTitle = "Edit Genero";
    this.activateAddEditGeneroComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete inspection ${item.id}`)) {
      this.apiGenero.deleteGenero(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn) {
          closeModalBtn.click();
        }

        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function() {
          if(showDeleteSuccess) {
            showDeleteSuccess.style.display = "none"
          }
        }, 4000);
        this.generos$ = this.apiGenero.getGeneros();
      })
    }
  }

  modalClose() {
    this.activateAddEditGeneroComponent = false;
    this.generos$ = this.apiGenero.getGeneros();
  }

}
