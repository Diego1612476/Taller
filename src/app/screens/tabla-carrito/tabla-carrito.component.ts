import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
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

  constructor(private Carritoservicio:CarritoService){}

  dataCarrito:any
  ngOnInit(){
    this.Carritoservicio.getCarrito().subscribe(item=>{
      this.dataCarrito=item
    })
  }

  guardarCarrito(ide:any,nombrevid:any,plataformavid:any,lanzamientovid:any,valor:any){

    const productos={
      id:ide,
      nombre:nombrevid,
      plataforma:plataformavid,
      lanzamiento:lanzamientovid,
      precio:valor,
    }
    this.Carritoservicio.postCarrito(productos).subscribe()
  }
}
