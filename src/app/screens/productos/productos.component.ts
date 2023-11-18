import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  
  constructor(private prodServicio:ProductosService){}

  dataProductos:any={};

  ngOnInit(){
    this.prodServicio.getProduct().subscribe(product=>{
      this.dataProductos=product
    })
  }


}
