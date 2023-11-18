import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariolService {

  constructor(private http:HttpClient) { }
  private API_USUARIOL= ""

  getUsuariol(): Observable <any>{
    return this.http.get(this.API_USUARIOL)
  }

  postUsuariol(Usuario:any): Observable <any>{
    return this.http.post(this.API_USUARIOL, Usuario)
  }
}
