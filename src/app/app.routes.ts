import { Routes } from '@angular/router';
import { Shop } from './pages/shop/shop';
import { Product } from './pages/product/product';
import { Feedback } from './pages/feedback/feedback';

export const routes: Routes = [
  {
    path: '',
    component: Shop,
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    component: Product,
  },
  {
    path: 'feedback',
    component: Feedback,
  },
];
