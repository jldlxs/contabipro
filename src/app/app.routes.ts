import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'manager/nfse',
    pathMatch: 'full',
  },
  {
    path: 'manager',
    loadComponent: () => import('./manager/manager.page').then( m => m.ManagerPage),
    children: [
      {
        path: 'nfse',
        loadComponent: () => import('./nfse/nfse.page').then( m => m.NfsePage)
      },
    ]
  },


  
  {
    path: 'nfse',
    loadComponent: () => import('./nfse/nfse.page').then( m => m.NfsePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];
