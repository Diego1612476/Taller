import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor (private http:HttpClient){}

  private API_PRODUCT="http://localhost:3000/videojuegos"

getProduct():Observable<any>{
  return this.http.get(this.API_PRODUCT)
}
postProduct(producto:any):Observable<any>{
  return this.http.post(this.API_PRODUCT,producto)
}
putProduct(producto:any,id:any):Observable<any>{
  this.API_PRODUCT=`${this.API_PRODUCT}/${id}`
  return this.http.put(this.API_PRODUCT,producto)
}

deleteProduct(id:any):Observable<any>{
  this.API_PRODUCT= `${this.API_PRODUCT}/${id}`
  return this.http.delete(this.API_PRODUCT)
}
}
