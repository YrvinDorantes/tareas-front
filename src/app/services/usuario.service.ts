import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  token: String = null;
  private _storage: Storage | null = null;

  constructor(private http: HttpClient,
    private storage: Storage) { 
      this.init();
    }

    async init() {
      const storage = await this.storage.create();
      this._storage = storage;
    }

    login( email: string, password: string ){
      const data = {email,password};

      return new Promise( resolve => {


        this.http.post( `${ URL }/user/login`,data)
        .subscribe( resp => {
            console.log(resp);
  
            if (resp['ok']){
                this.guardarToken( resp['token']);
                resolve(true);
            }else{
              this.token = null;
              this.storage.clear();
              resolve(false);
            }
        });

      });

      
    }

   async guardarToken(token: string){
      this.token = token;
      await this.storage.set('token', token);
    }

}
