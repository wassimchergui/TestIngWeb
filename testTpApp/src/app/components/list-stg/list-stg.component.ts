import {Component, OnInit} from '@angular/core';
import {Stagiaire} from "../../stagiaire";
import {StagiaireCrudService} from "../../services/stagiaire-crud.service";
import {Router, RouterLink} from "@angular/router";
import {DatePipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-list-stg',
  standalone: true,
  imports: [
    UpperCasePipe,
    NgIf,
    NgForOf,
    RouterLink,
    DatePipe
  ],
  templateUrl: './list-stg.component.html',
  styleUrl: './list-stg.component.css'
})
export class ListStgComponent implements OnInit {
  stgList: Stagiaire[] = [];
  constructor(private stagiaireCrudService: StagiaireCrudService, private router: Router) {
  }
  ngOnInit(): void {
   this.showList();


  }
  showList(){

    this.stagiaireCrudService.getAllStg().subscribe({
      next : data => {
        this.stgList = data;
        console.log('The response:', data);

      },
      error : err => {
        console.log(err);
      }
    });


  }

  deleteAllStg() {
    this.stgList = [];
    this.showList();
  }


  modifierStg(id: number) {
    this.router.navigate(['/update', id]);

  }

  supprimerStg(id: number) {
    this.stagiaireCrudService.deleteStg(id).subscribe({
        next : data => {
        console.log('The response:', data);

      },
      error : err => {
        console.log(err);
      }
    });
    this.showList();

  }
}




