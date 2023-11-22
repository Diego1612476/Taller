import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private servicio:LoginService){}


  login(formulario:any){

    let temp= JSON.stringify (formulario.value)

    this.servicio.getUsuario().subscribe(item =>{
      for (let doc of item){
        if(temp === JSON.stringify(doc) ){
          alert("ACCESO CORRECTO")
          localStorage.setItem('login', 'true')
          localStorage.setItem('login', doc.cargo)
        }
      }
    
    })

  }

}
