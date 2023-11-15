import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './screens/home/home.component';
import { UsuarioComponent } from './screens/usuario/usuario.component';
import { Error404Component } from './screens/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { TerminosComponent } from './screens/terminos/terminos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UsuarioComponent,
    Error404Component,
    FooterComponent,
    ProductosComponent,
    TerminosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
