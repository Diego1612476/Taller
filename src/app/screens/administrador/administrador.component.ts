import { Component } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {

  salir(){
    localStorage.setItem('login', 'false')
    window.location.reload()
  }

}
