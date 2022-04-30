import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaTasks, Task } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  paginaTasks = 0;

  nuevoTask = new EventEmitter<Task>();


  constructor( private http: HttpClient,
              private usuarioService: UsuarioService) { }

  getTasks( pull: boolean = false){

    if (pull){
      this.paginaTasks = 0;
    }

    this.paginaTasks ++;

    return this.http.get<RespuestaTasks>( `${ URL }/tasks/?pagina=${ this.paginaTasks }`);
  }

    crearTask(task){
        const headers = new HttpHeaders({
          'x-token': this.usuarioService.token
        });

        return new Promise (resolve => {
            this.http.post( `${ URL }/tasks/`,task,{headers})
            .subscribe( resp => {
              this.nuevoTask.emit( resp['task']);
              resolve(true);
            });
        });

        
    }
}
