import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AosDirective } from '../../../directives/aos.directive';

interface ServiceItem {
  title: string;
  description: string;
  link: string;
  iconPath: string;
  colorClass: string;
}

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.html',
  standalone: true,
  imports: [CommonModule, RouterModule, AosDirective]
})
export class ServicesListComponent implements OnInit {
  
  services: ServiceItem[] = [
    {
      title: 'AI Voice Agents',
      description: 'Automate customer interactions with intelligent voice systems that answer calls, book appointments, and qualify leads 24/7.',
      link: '/services/ai-voice-agents',
      iconPath: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
      colorClass: 'text-brand-primary bg-brand-primary/10'
    },
    {
      title: 'AI Chatbots',
      description: 'Deploy conversational AI that handles enquiries, supports customers, and drives conversions across your digital channels.',
      link: '/services/ai-chatbots',
      iconPath: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
      colorClass: 'text-brand-secondary bg-brand-secondary/10'
    },
    {
      title: 'Web & App Development',
      description: 'Scalable, secure, and beautifully designed websites and applications built to support your business goals.',
      link: '/services/web-app-development',
      iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      colorClass: 'text-cyan-500 bg-cyan-500/10'
    },
    {
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns that build brand awareness, engage your audience, and drive meaningful growth.',
      link: '/services/social-media-marketing',
      iconPath: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
      colorClass: 'text-blue-500 bg-blue-500/10'
    },
    {
      title: 'SEO Services',
      description: 'In-depth SEO strategies to improve search rankings, drive organic traffic, and establish ultimate market authority.',
      link: '/services/seo-services',
      iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      colorClass: 'text-indigo-500 bg-indigo-500/10'
    },
    {
      title: 'PPC Advertising',
      description: 'High-ROI pay-per-click advertising campaigns carefully targeted to generate high-quality leads and instant sales.',
      link: '/services/ppc-advertising',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      colorClass: 'text-green-500 bg-green-500/10'
    },
    {
      title: 'eCommerce Solutions',
      description: 'End-to-end eCommerce development and strategy focused on maximizing your conversions and average order value.',
      link: '/services/ecommerce-solutions',
      iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      colorClass: 'text-orange-500 bg-orange-500/10'
    },
    {
      title: 'Design & Branding',
      description: 'Striking visual identities, comprehensive design systems, and stunning UX/UI that captures and retains attention.',
      link: '/services/design-branding',
      iconPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      colorClass: 'text-purple-500 bg-purple-500/10'
    },
    {
      title: 'Digital Consultancy',
      description: 'Expert digital transformation guidance mapping out technology implementations to rapidly scale your operations.',
      link: '/services/digital-consultancy',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      colorClass: 'text-rose-500 bg-rose-500/10'
    }
  ];

  constructor() {}

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
