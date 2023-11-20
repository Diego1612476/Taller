import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  constructor(private servicio:UsuarioService){}

  dataUsuario:any={};

  gOnInit(){
    this.servicio.getUsuario().subscribe(usuario => {
      this.dataUsuario = usuario
    })
  }

  guardar (nombre:string, username:string, email:string, clave:string){

    const temp={
      nombre:nombre,
      username:username,
      email:email,
      clave:clave

    }

    this.servicio.postUsuario(temp).subscribe()

    alert("REGISTRADO CORRECTAMENTE")
  }


  
  // GUARDIAN
  cargo:any;
  

  login(formulario:any){

    let temp= JSON.stringify (formulario.value)

    this.servicio.getUsuario().subscribe(item =>{
      for (let doc of item){
        if(temp === JSON.stringify(doc) ){
          alert("ACCESO CORRECTO")
          localStorage.setItem('login', 'true')
        }
      }
    
    })

  }

}
