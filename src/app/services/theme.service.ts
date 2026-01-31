import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'brandif-theme';
  isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    this.updateTheme();
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
    this.updateTheme();
    localStorage.setItem(this.THEME_KEY, this.isDarkMode() ? 'dark' : 'light');
  }

  private getInitialTheme(): boolean {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private updateTheme() {
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
