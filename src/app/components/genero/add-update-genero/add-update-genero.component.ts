import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ApiGeneroService} from 'src/app/services/genero/api-genero.service'
@Component({
  selector: 'app-add-update-genero',
  templateUrl: './add-update-genero.component.html',
  styleUrls: ['./add-update-genero.component.css']
})
export class AddUpdateGeneroComponent implements OnInit {
  generos$!: Observable<any[]>;

  constructor(private service:ApiGeneroService) { }

  @Input() genero:any;
  id: number = 0;
  name: string = "";
  description:string = "";


  ngOnInit(): void {
    this.id = this.genero.id;
    this.name = this.genero.name;
    this.description = this.genero.description;

    this.generos$ = this.service.getGeneros();
  }

  addGenero() {
    var genero = {
      name:this.name,
      description:this.description,
      id:0
    }
    this.service.addGenero(genero).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

  updateGenero() {
    var genero = {
      id: this.id,
      name:this.name,
      description:this.description,

    }
    var id:number = this.id;
    this.service.updateGenero(id,genero).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }


}
