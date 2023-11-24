import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './screens/home/home.component';
import { UsuarioComponent } from './screens/usuario/usuario.component';
import { Error404Component } from './screens/error404/error404.component';

import { ProductosComponent } from './screens/productos/productos.component';
import { TerminosComponent } from './screens/terminos/terminos.component';
import { CarritoComponent } from './screens/carrito/carrito.component';
import { TablaCarritoComponent } from './screens/tabla-carrito/tabla-carrito.component';
import {HttpClientModule} from '@angular/common/http';
import { TablaProductosComponent } from './screens/tabla-productos/tabla-prodcutos.component';
import { RegistroVideojuegoComponent } from './screens/registro-videojuego/registro-videojuego.component';
import { AdministradorComponent } from './screens/administrador/administrador.component'
import { FormsModule } from '@angular/forms';
import { DetallesVideojuegoComponent } from './screens/detalles-videojuego/detalles-videojuego.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UsuarioComponent,
    Error404Component,
    ProductosComponent,
    TerminosComponent,
    CarritoComponent,
    TablaCarritoComponent,
    TablaProductosComponent,
    RegistroVideojuegoComponent,
    AdministradorComponent,
    DetallesVideojuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
