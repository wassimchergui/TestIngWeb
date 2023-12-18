import { Routes } from '@angular/router';
import {ListStgComponent} from "./components/list-stg/list-stg.component";
import {NewStgComponent} from "./components/new-stg/new-stg.component";
import {UpdateStgComponent} from "./components/update-stg/update-stg.component";

export const routes: Routes = [
  { path: 'list', component : ListStgComponent},
  {path: 'add', component :NewStgComponent },
  {path:'update/:id',component:UpdateStgComponent},
  {path: '', redirectTo : '/list' , pathMatch:'full'}


];
