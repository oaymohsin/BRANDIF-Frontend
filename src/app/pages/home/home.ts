import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AosDirective } from '../../directives/aos.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  standalone: true,
  imports: [CommonModule, RouterModule, AosDirective]
})
export class HomeComponent {}
