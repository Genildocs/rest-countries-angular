import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://restcountries.com/v3.1';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    getCountries() {
        return this.http.get(`${BASE_URL}/all`);
    }

    getCountrie(param: string) {
        return this.http.get(`${BASE_URL}/name/${param}`);
    }
}
