import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(private carritoServicio:CarritoService,private productos:ProductosService){}

  dataCarrito:any={};
  ide:any;
  nombrevid:any;
  plataformavid:any;
  valor:any;

  ngOnInit(){
    this.productos.getProduct().subscribe(item=>{
      this.dataCarrito=item
    })
  }

  
  guardarCarrito(ide:any,nombrevid:any,plataformavid:any,valor:any){

    const productos={
      id:ide,
      nombre:nombrevid,
      plataforma:plataformavid,
      precio:valor,
    }
    this.carritoServicio.postCarrito(productos).subscribe()
    console.log (productos)
  }
  
}
