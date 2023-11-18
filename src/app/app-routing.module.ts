import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { UsuarioComponent } from './screens/usuario/usuario.component';
import { Error404Component } from './screens/error404/error404.component';
import { TerminosComponent } from './screens/terminos/terminos.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { CarritoComponent } from './screens/carrito/carrito.component';
import { AdministradorComponent } from './screens/administrador/administrador.component';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path:'terminos',component:TerminosComponent},
  {path:'productos',component:ProductosComponent},
  {path:'carrito', component:CarritoComponent},
  {path:'administrador',component:AdministradorComponent},

  {path: "**", component:Error404Component},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
