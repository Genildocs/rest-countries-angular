import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: '/detail', component: DetailComponent },
];
