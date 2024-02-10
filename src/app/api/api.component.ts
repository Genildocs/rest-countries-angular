import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent implements OnInit {
  http = inject(HttpClient);
  countries: any = [];

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries() {
    this.http
      .get('https://restcountries.com/v3.1/all')
      .subscribe((data: any) => {
        this.countries = data;
      });
  }
}
