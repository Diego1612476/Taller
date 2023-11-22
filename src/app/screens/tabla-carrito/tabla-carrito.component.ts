import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

interface Videojuego{
 
    nombre: string;
    precio: number;

}

@Component({
  selector: 'app-tabla-carrito',
  templateUrl: './tabla-carrito.component.html',
  styleUrls: ['./tabla-carrito.component.css']
})
export class TablaCarritoComponent {//implements OnInit{

 // dataProductos:any;
  //suma:number=0;

  carrito: Videojuego[] = [];
  total: number = 0;
  constructor(private http: HttpClient){}

  /*private API_PRODUCT="http://localhost:3000/videojuegos"
  ngOnInit(){
    this.http.get(this.API_PRODUCT).subscribe(item=>{
      this.dataProductos=item;
      this.suma=sumarProductos(this.dataProductos.numeros);
    });
  }

  sumarProductos(numeroProducto:number[]):number{
    return numeros.reduce((a,b))
  }*/
}
