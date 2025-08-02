import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/shop/shop').then((m) => m.Shop),
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./pages/product/product').then((m) => m.Product),
  },
  {
    path: 'feedback',
    loadComponent: () =>
      import('./pages/feedback/feedback').then((m) => m.Feedback),
  },
];
