import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const userToken = localStorage.getItem('uesrToken');
  if (userToken !== null) {
    return true;
  } else {
    const router = new Router(); 
    router.navigate(['/login']);
    return false;
  }
};
