import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-tabla-carrito',
  templateUrl: './tabla-carrito.component.html',
  styleUrls: ['./tabla-carrito.component.css']
})
export class TablaCarritoComponent {

  
  constructor(private servicio:ProductosService){}
  dataProductos:any
  ngOnInit(){
    this.servicio.getProduct().subscribe(item=>{
      this.dataProductos=item
    })
  }
}
