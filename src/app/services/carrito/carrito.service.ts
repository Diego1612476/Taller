import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http:HttpClient) { }
  private API_PRODUCT= "http://localhost:3000/carrito"

  getCarrito():Observable<any>{
    return this.http.get(this.API_PRODUCT)
  }
  postCarrito(producto:any):Observable<any>{
    return this.http.post(this.API_PRODUCT,producto)
  }
}
