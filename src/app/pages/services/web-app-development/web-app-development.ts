import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AosDirective } from '../../../directives/aos.directive';

@Component({
  selector: 'app-web-app-development',
  templateUrl: './web-app-development.html',
  standalone: true,
  imports: [CommonModule, RouterModule, AosDirective]
})
export class WebAppDevelopmentComponent {}
