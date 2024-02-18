import { Component, OnInit } from '@angular/core';
import { InputSearchComponent } from '../../components/input-search/input-search.component';
import { FilterSearchComponent } from '../../components/filter-search/filter-search.component';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        InputSearchComponent,
        FilterSearchComponent,
        RouterLink,
        RouterLinkActive,
        HeaderComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
    countries: any = [];
    counter: number = 8;

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.fetchCountries();
    }

    countCountries() {
        this.counter += 8;
        return this.counter;
    }

    fetchCountries() {
        this.apiService.getCountries().subscribe({
            next: (countries: any) => {
                this.countries = countries.slice(0, this.counter);
                console.log('Busca concluída com sucesso! ');
            },
            error: (err) => console.log('Erro: ' + err),
        });
    }

    filterByRegion(region: string) {
        this.apiService.filterCountriesByRegion(region).subscribe({
            next: (filteredCountries: any) => {
                this.countries = filteredCountries;
                console.log('Países filtrados por região: ', this.countries);
            },
            error: (err) => console.log('Erro ao filtrar por região: ' + err),
        });
    }

    updateCountries() {
        if (this.counter > 250) {
            return;
        }
        this.countCountries(); // Atualiza o valor de count
        this.fetchCountries(); // Atualiza os países
    }
}
