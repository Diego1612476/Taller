import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './screens/home/home.component';
import { UsuarioComponent } from './screens/usuario/usuario.component';
import { Error404Component } from './screens/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';
=======
import { ProductosComponent } from './screens/productos/productos.component';
import { TerminosComponent } from './screens/terminos/terminos.component';
>>>>>>> 80ab930b706800a2df470cad815a328aa028c9a0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavBarComponent,
    HomeComponent,
    UsuarioComponent,
    Error404Component,
    FooterComponent
=======
    ProductosComponent,
    TerminosComponent
>>>>>>> 80ab930b706800a2df470cad815a328aa028c9a0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
