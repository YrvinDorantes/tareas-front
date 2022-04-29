import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaTasks } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  paginaTasks = 0;


  constructor( private http: HttpClient) { }

  getTasks( pull: boolean = false){

    if (pull){
      this.paginaTasks = 0;
    }

    this.paginaTasks ++;

    return this.http.get<RespuestaTasks>( `${ URL }/tasks/?pagina=${ this.paginaTasks }`);
  }
}
