import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
@Component({
    selector: 'app-filter-search',
    standalone: true,
    imports: [],
    templateUrl: './filter-search.component.html',
    styleUrl: './filter-search.component.css',
})
export class FilterSearchComponent {
    constructor(private apiService: ApiService) {}
    ngOnInit() {}
    toggleFilter(region: string) {
        console.log(region);
    }
}
