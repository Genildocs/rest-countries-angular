import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-input-search',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './input-search.component.html',
    styleUrl: './input-search.component.css',
})
export class InputSearchComponent {
    @Output() searchRegion: EventEmitter<string> = new EventEmitter<string>();

    inputValue: string = '';
    constructor() {}
    onSearch() {
        if (this.inputValue === '') return;
        this.searchRegion.emit(this.inputValue);
    }
}
