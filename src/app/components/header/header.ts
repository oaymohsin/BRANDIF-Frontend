import { Component, HostListener, ElementRef } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: false
})
export class HeaderComponent {
  isMenuOpen = false;
  isServicesOpen = false;

  constructor(
    public themeService: ThemeService,
    private el: ElementRef
  ) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isServicesOpen = false;
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) this.isServicesOpen = false;
  }

  toggleServices() {
    this.isServicesOpen = !this.isServicesOpen;
  }
}
