import { Home } from './pages/home/home';
import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { BlankLayout } from './layouts/blank-layout/blank-layout';
import { Notfound } from './pages/notfound/notfound';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Cart } from './pages/cart/cart';
import { Products } from './pages/products/products';
import { Brands } from './pages/brands/brands';
import { Categories } from './pages/categories/categories';
import { Checkout } from './pages/checkout/checkout';

export const routes: Routes = [
    {path:' ', redirectTo:'home' , pathMatch:'full'},
    {path: '',component: AuthLayout ,children:[
          {path:'login', component:Login,title:'login'},
        {path:'register', component:Register,title:'register'},
    ]},  
    {path: '',component: BlankLayout,children:[
        {path:'home',component: Home , title:"Home"},
        {path:'cart',component: Cart , title:"Cart"},
        {path:'products',component: Products , title:"Products"},
        {path:'brands',component: Brands , title:"Brands"},
        {path:'categories',component: Categories , title:"Categoris"},
        {path:'checkout',component: Checkout , title:"Check-Out"},
    ]},
    {path:'**', component: Notfound}
];
