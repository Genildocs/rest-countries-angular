import { Component } from '@angular/core';
import { InputSearchComponent } from '../../components/input-search/input-search.component';
import { FilterSearchComponent } from '../../components/filter-search/filter-search.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { count } from 'rxjs';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        InputSearchComponent,
        FilterSearchComponent,
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    countries: any = [];

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.fetchCountries();
    }

    fetchCountries() {
        this.apiService.getCountries().subscribe({
            next: (countries: any) => {
                this.countries = countries.slice(0, 10);
                console.log('Requisição realizada com sucesso!');
            },
            error: (err) => console.log('Erro: ' + err),
        });
    }
}
