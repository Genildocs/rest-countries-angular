import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isDark = false;
  toggleDarkMode() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark', this.isDark);
  }
}
