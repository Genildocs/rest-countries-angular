import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';

const BASE_URL = 'https://restcountries.com/v3.1';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private http = inject(HttpClient);

    constructor() {}

    getCountries() {
        return this.http.get(`${BASE_URL}/all`);
    }
}
