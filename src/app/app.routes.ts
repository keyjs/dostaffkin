import { Routes } from '@angular/router';
import { Order } from './pages/order/order';
import { Home } from './pages/home/home';
import { Track } from './pages/track/track';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'order',
    component: Order
  },
  {
    path: 'track',
    component: Track
  },
  {
    path: '**',
    redirectTo: ''
  }
];