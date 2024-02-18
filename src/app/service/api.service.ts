import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'https://restcountries.com/v3.1';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    getCountries(): Observable<any> {
        return this.http.get<any>(`${BASE_URL}/all`);
    }

    getCountrie(param: string): Observable<any> {
        return this.http.get<any>(`${BASE_URL}/name/${param}`);
    }
}
