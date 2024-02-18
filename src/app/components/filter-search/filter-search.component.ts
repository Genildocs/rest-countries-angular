import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filter-search',
    standalone: true,
    imports: [],
    templateUrl: './filter-search.component.html',
    styleUrl: './filter-search.component.css',
})
export class FilterSearchComponent {
    @Output() filterRegion: EventEmitter<string> = new EventEmitter<string>();

    regions: any = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    constructor() {}

    onRegionClick(region: string) {
        this.filterRegion.emit(region);
    }
}
