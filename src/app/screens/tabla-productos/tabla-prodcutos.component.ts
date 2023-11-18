import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent {

  constructor(private servicio:ProductosService){}
  dataProductos:any
  ngOnInit(){
    this.servicio.getProduct().subscribe(item=>{
      this.dataProductos=item
    })
  }
}
