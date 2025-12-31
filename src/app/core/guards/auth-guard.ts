import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isPlatform = inject(PLATFORM_ID);
  let token = null;
  if (isPlatformBrowser(isPlatform)) {
     token = localStorage.getItem('userToken');
  }
  
  if (token) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};