import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { UsuarioComponent } from './screens/usuario/usuario.component';
import { Error404Component } from './screens/error404/error404.component';
import { TerminosComponent } from './screens/terminos/terminos.component';
import { ProductosComponent } from './screens/productos/productos.component';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'usuario', component:UsuarioComponent},

  {path:'productos',component:ProductosComponent},
  {path:'terminos',component:TerminosComponent},
  {path: "**", component:Error404Component}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
