import { CanActivateFn } from '@angular/router';

export const usuarioGuard: CanActivateFn = (route, state) => {
  let acceso=localStorage.getItem('login')
  let rol=localStorage.getItem('rol')
  if(acceso==='true' && rol==='admin'){
    return true
  }else{
    return false;
  }
};
