import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

export const routes: Routes = [
    { path: '', title: 'rest-countries-home', component: HomeComponent },
    {
        path: 'detail/:countrieName',
        title: 'rest-countries-detail',
        component: DetailComponent,
    },
    {path: '**', component: PageNotFoundComponent},
];
