import { Details } from './pages/details/details';
import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { BlankLayout } from './layouts/blank-layout/blank-layout';
import { Notfound } from './pages/notfound/notfound';
import { loggedGuard } from './core/guards/logged-guard';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    component: AuthLayout,
    canActivate:[loggedGuard],   
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login').then(c => c.Login),
        title: 'Login'
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register').then(c => c.Register),
        title: 'Register'
      },
      {
        path: 'forget',
        loadComponent: () =>
          import('./components/forget-password/forget-password').then(c => c.ForgetPassword),
        title: 'Register'
      }
    ]
  },

  // ✅ Main app layout
  {
    path: '',
    component: BlankLayout,
    canActivate:[authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home').then(c => c.Home),
        title: 'Home'
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart/cart').then(c => c.Cart),
        title: 'Cart'
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products').then(c => c.Products),
        title: 'Products'
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./pages/details/details').then(c => c.Details),
        title: 'Products'
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./pages/brands/brands').then(c => c.Brands),
        title: 'Brands'
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./pages/categories/categories').then(c => c.Categories),
        title: 'Categories'
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./pages/checkout/checkout').then(c => c.Checkout),
        title: 'Checkout'
      }
    ]
  },

  { path: '**', component: Notfound, title: '404 Not Found' }
];
