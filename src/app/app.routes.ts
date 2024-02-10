import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { path: '', title: 'home', component: HomeComponent },
  { path: 'detail', title: 'detail', component: DetailComponent },
];
