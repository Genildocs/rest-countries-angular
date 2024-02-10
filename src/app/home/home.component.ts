import { Component } from '@angular/core';
import { ApiComponent } from '../api/api.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ApiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
