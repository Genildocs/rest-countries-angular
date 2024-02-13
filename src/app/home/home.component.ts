import { Component } from '@angular/core';
import { CountriesComponent } from '../components/countries/countries.component';
import { InputSearchComponent } from '../components/input-search/input-search.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputSearchComponent, CountriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
