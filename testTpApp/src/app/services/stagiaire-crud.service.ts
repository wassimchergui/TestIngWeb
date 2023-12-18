import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Stagiaire} from "../stagiaire";

@Injectable({
  providedIn: 'root'
})
export class StagiaireCrudService {

  private url="http://localhost:8085/stagiaires";

  constructor(private  httpClient:HttpClient) { }
  getAllStg():Observable<Stagiaire[]>{
    return this.httpClient.get<Stagiaire[]>(this.url);
  }
  AddStg(stagiaire: Stagiaire):Observable<Stagiaire>{
    return this.httpClient.post<Stagiaire>(this.url,stagiaire);
  }
  updateStg(id:number, stagiaire:Stagiaire):Observable<Stagiaire>{
    return this.httpClient.put<Stagiaire>(this.url+"/"+id,stagiaire);
  }
  deleteStg(id:number):Observable<string>{
    return this.httpClient.delete<string>(this.url+"/"+id);
  }
  getStg(id:number):Observable<Stagiaire>{
    return this.httpClient.get<Stagiaire>(this.url+"/"+id);
  }
}
