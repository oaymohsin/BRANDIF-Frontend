import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AosDirective } from '../../../directives/aos.directive';

@Component({
  selector: 'app-ai-chatbots',
  standalone: true,
  imports: [CommonModule, RouterModule, AosDirective],
  templateUrl: './ai-chatbots.html'
})
export class AiChatbotsComponent {}
