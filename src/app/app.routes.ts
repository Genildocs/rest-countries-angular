import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
    { path: '', title: 'rest-countries-home', component: HomeComponent },
    {
        path: 'detail',
        title: 'rest-countries-detail',
        component: DetailComponent,
    },
];
