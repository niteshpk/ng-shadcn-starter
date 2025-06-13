// src/app/core/services/theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  toggleDarkTheme(enable: boolean): void {
    const body = document.body;
    if (enable) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }

  isDarkMode(): boolean {
    return document.body.classList.contains('dark');
  }
}
