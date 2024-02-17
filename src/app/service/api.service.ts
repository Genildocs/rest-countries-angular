import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import {normalizeExtraEntryPoints} from "@angular-devkit/build-angular/src/tools/webpack/utils/helpers";

const BASE_URL = 'https://restcountries.com/v3.1';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    private http = inject(HttpClient)
    constructor() {}

    getCountries() {
        return this.http.get(`${BASE_URL}/all`);
    }

    getCountrie(param:string){
       return this.http.get(`${BASE_URL}/name/${param}`)
    }
}
