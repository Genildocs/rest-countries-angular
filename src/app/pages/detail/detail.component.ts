import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CountrieDetail } from '../../interface/countries-detail';

@Component({
    selector: 'app-detail',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.css',
})
export class DetailComponent {}
