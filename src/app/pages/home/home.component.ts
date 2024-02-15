import { Component } from '@angular/core';
import { InputSearchComponent } from '../../components/input-search/input-search.component';
import {FilterSearchComponent} from "../../components/filter-search/filter-search.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputSearchComponent, FilterSearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
