import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Only access sessionStorage in the browser
  if (typeof window !== 'undefined') {
    const token = sessionStorage.getItem('token');
    if (token) {
      return true;
    }
  }

  router.navigateByUrl('');
  return false;
};
