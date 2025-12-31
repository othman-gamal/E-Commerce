import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const loggedGuard: CanActivateFn = () => {
  const router = inject(Router);
  let token = null;
  const isPlatform =inject(PLATFORM_ID)
  if(isPlatformBrowser(isPlatform)){
    token=localStorage.getItem('userToken');
  }

  if (!token) {
    return true;
  }

  router.navigate(['/home']);
  return false;
};
