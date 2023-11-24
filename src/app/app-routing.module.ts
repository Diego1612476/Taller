import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { UsuarioComponent } from './screens/usuario/usuario.component';
import { TerminosComponent } from './screens/terminos/terminos.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { CarritoComponent } from './screens/carrito/carrito.component';
import { AdministradorComponent } from './screens/administrador/administrador.component';
import { DetallesVideojuegoComponent } from './screens/detalles-videojuego/detalles-videojuego.component';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path:'terminos',component:TerminosComponent},
  {path:'productos',component:ProductosComponent},
  {path:'carrito', component:CarritoComponent},
  {path:'administrador',component:AdministradorComponent},
  {path:'detalles/:id',component:DetallesVideojuegoComponent},

  {path: '**',redirectTo:'home',pathMatch:'full'}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
