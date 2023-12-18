import { Component } from '@angular/core';
import {Stagiaire} from "../../stagiaire";
import {StagiaireCrudService} from "../../services/stagiaire-crud.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-new-stg',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './new-stg.component.html',
  styleUrl: './new-stg.component.css'
})
export class NewStgComponent {

  stg:Stagiaire =new Stagiaire();
  constructor(private  stagiaireService : StagiaireCrudService, private router: Router) {
  }
  ajouterStg(){
    this.stagiaireService.AddStg(this.stg).subscribe({
      next : data => {
        console.log('The response:', data);

      },
        error : err => {
        console.log(err);
      }
    });



    this.router.navigate(['/list']);


  }


}

