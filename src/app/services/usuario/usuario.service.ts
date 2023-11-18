import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  private API_USUARIO= "https://app-proyecto-c0825-default-rtdb.firebaseio.com/usuario.json"

  getUsuario(): Observable <any>{
    return this.http.get(this.API_USUARIO)
  }

  postUsuario(Usuario:any): Observable <any>{
    return this.http.post(this.API_USUARIO, Usuario)
  }
}
