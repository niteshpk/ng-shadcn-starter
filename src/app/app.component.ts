import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { ButtonComponent } from '@shared/components/ui/button/button.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="p-4">
      <ui-button (click)="toggleDark()">Toggle Theme</ui-button>
      <p class="mt-4">Current Theme Mode Active</p>
    </div>
  `,
  imports: [ButtonComponent],
})
export class AppComponent {
  private isDark = false;

  constructor(private themeService: ThemeService) {}

  toggleDark() {
    this.isDark = !this.isDark;
    this.themeService.toggleDarkTheme(this.isDark);
  }
}
