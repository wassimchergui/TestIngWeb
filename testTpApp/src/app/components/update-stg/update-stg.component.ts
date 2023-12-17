import {Component, OnInit} from '@angular/core';
import {Stagiaire} from "../../stagiaire";
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireCrudService} from "../../services/stagiaire-crud.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-update-stg',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './update-stg.component.html',
  styleUrl: './update-stg.component.css'
})
export class UpdateStgComponent implements OnInit {

  id:number=0;
  stg:Stagiaire=new Stagiaire();
  constructor(private route:ActivatedRoute,private router:Router,
              private stagiaireCrudService: StagiaireCrudService){}
  ngOnInit(){

    this.id=this.route.snapshot.params['id'];
    this.stagiaireCrudService.getStg(this.id).subscribe({
      next : data => {
        this.stg=data;
        console.log('The response:', data);

      },
      error : err => {
        console.log(err);
      }
    });
      }
  updateStg(){
    this.stagiaireCrudService.updateStg(this.id,this.stg).subscribe({
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
