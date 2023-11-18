import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private servicio:HomeService){}

  dataUsuario:any={};

  gOnInit(){
    this.servicio.getUsuario().subscribe(usuario => {
      this.dataUsuario = usuario
    })
  }

  guardar (nombre:string, username:string, email:string){

    const temp={
      nombre:nombre,
      username:username,
      email:email

    }

    this.servicio.postUsuario(temp).subscribe()

    alert("REGISTRADO CORRECTAMENTE")
  }

}
