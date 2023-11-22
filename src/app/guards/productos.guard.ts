import { CanActivateFn } from '@angular/router';

export const productosGuard: CanActivateFn = (route, state) => {
  let acceso=localStorage.getItem('login')
  let rol=localStorage.getItem('rol')
  if(acceso==='true' && rol==='usuario'){
    return true
  }else{
    return false;
  }
};
