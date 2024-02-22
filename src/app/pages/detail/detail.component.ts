import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { ApiService } from '../../service/api.service';

@Component({
    selector: 'app-detail',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, HeaderComponent],
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.css',
})
export class DetailComponent {
    countrie: any = [];
    countrieName: string = '';

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.countrieName = params['countrieName'];
        });
        this.getCountrie(this.countrieName);
    }
    getCountrie(param: string) {
        this.apiService.getCountrie(param).subscribe({
            next: (countre: any) => {
                this.countrie = countre;
                console.log(this.countrie);
            },
            error: (err) => {
                console.log('Error' + err);
            },
        });
    }

    getCurriency() {
        if (this.countrie) {
            const currencies: any = Object.values(this.countrie[0].currencies);
            return `${currencies[0].symbol}  ${currencies[0].name}`;
        }
        return 'Erro ao buscar a moeda';
    }

    getLanguages(): string {
        if (this.countrie) {
            const languages: string[] = Object.values(
                this.countrie[0].languages
            );
            return languages.join(', ');
        }
        return 'Erro ao buscar os idiomas';
    }

    getBorder(border: string) {
        this.apiService.getBorder(border).subscribe({
            next: (countre: any) => {
                this.countrie = countre;
                console.log(this.countrie);
            },
            error: (err) => {
                console.log('Error' + err);
            },
        });
    }
}
