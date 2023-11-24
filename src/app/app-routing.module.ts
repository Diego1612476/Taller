import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { UsuarioComponent } from './screens/usuario/usuario.component';

import { TerminosComponent } from './screens/terminos/terminos.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { CarritoComponent } from './screens/carrito/carrito.component';
import { AdministradorComponent } from './screens/administrador/administrador.component';
import { DetallesVideojuegoComponent } from './screens/detalles-videojuego/detalles-videojuego.component';

import { LoginComponent } from './screens/login/login.component';
import { usuarioGuard } from './guards/usuario.guard';
import { productosGuard } from './guards/productos.guard';


const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path:'terminos',component:TerminosComponent},
  {path:'productos',component:ProductosComponent},
  {path:'detalles/:id',component:DetallesVideojuegoComponent},
  {path:'carrito', component:CarritoComponent, canActivate:[productosGuard]},
  {path:'administrador',component:AdministradorComponent, canActivate:[usuarioGuard]},
  {path:'login', component:LoginComponent},

  {path: '**',redirectTo:'home',pathMatch:'full'}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
