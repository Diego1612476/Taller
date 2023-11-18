import { Component } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-registro-videojuego',
  templateUrl: './registro-videojuego.component.html',
  styleUrls: ['./registro-videojuego.component.css']
})
export class RegistroVideojuegoComponent {

  constructor (private servicio:ProductosService){}

  guardarProducto(ide:any,nombrevid:any,plataformavid:any,lanzamientovid:any,valor:any,imag:any){

    const productos={
      id:ide,
      nombre:nombrevid,
      plataforma:plataformavid,
      lanzamiento:lanzamientovid,
      precio:valor,
      imagen:imag
    }
    this.servicio.postProduct(productos).subscribe()
  }
  editarProducto(ide:any,nombrevid:any,plataformavid:any,lanzamientovid:any,valor:any,imag:any){

    const productos={
      id:ide,
      nombre:nombrevid,
      plataforma:plataformavid,
      lanzamiento:lanzamientovid,
      precio:valor,
      imagen:imag
    }
    this.servicio.putProduct(productos,ide).subscribe()
    }

    eliminarProducto(id:any){
      this.servicio.deleteProduct(id).subscribe()
    }

}
