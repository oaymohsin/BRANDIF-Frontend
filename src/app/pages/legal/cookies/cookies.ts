import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  template: `
    <div appAos class="relative overflow-hidden selection:bg-brand-primary/30 min-h-screen bg-white dark:bg-[#03070d]">
      
      <!-- Hero -->
      <section class="relative pt-32 pb-16 md:pt-48 md:pb-24">
        <div class="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-brand-primary/5 to-transparent"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div data-aos="fade-up" class="space-y-6">
            <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-tight">
              Cookie <span class="text-brand-primary">Policy</span>
            </h1>
            <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              How Brandif uses cookies and similar technologies on our website.
            </p>
            <div class="pt-8">
               <span class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                 Last Updated: February 1, 2026
               </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Content -->
      <section class="pb-32">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" class="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-[3rem] p-8 md:p-16 space-y-16">
            
            <div class="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <h2 class="text-3xl font-black text-slate-900 dark:text-white mb-6">What Are Cookies?</h2>
              <p class="text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                Cookies are small text files placed on your device when you visit websites. They help websites remember your preferences, analyse how you use the site, and provide certain functionalities.
              </p>
            </div>

            <div class="space-y-12">
              <h2 class="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4">
                <span class="w-2 h-8 bg-brand-primary rounded-full"></span>
                Cookies We Use
              </h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div *ngFor="let type of cookieTypes" class="p-8 rounded-[2.5rem] bg-white dark:bg-[#03070d] border border-slate-200 dark:border-white/10 space-y-4 shadow-sm hover:shadow-xl transition-all">
                  <div class="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" [innerHTML]="type.icon"></svg>
                  </div>
                  <h4 class="text-lg font-black text-slate-900 dark:text-white">{{type.title}}</h4>
                  <p class="text-sm text-slate-500 font-medium pb-4 border-b border-slate-100 dark:border-white/5">{{type.desc}}</p>
                  <ul class="space-y-2">
                    <li *ngFor="let item of type.items" class="flex items-center space-x-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                      <span class="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-50"></span>
                      <span>{{item}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="space-y-8">
              <h2 class="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4">
                <span class="w-2 h-8 bg-brand-primary rounded-full"></span>
                How to Control Cookies
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div class="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                    <h5 class="font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest">Browser Settings</h5>
                    <p class="text-xs text-slate-500 leading-relaxed">Most browsers allow you to refuse or delete cookies through settings. However, disabling cookies may affect website functionality.</p>
                 </div>
                 <div class="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                    <h5 class="font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest">Our Cookie Banner</h5>
                    <p class="text-xs text-slate-500 leading-relaxed">When you first visit our site, you can accept or reject non-essential cookies through our cookie banner.</p>
                 </div>
                 <div class="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                    <h5 class="font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest">Third-Party Opt-Out</h5>
                    <div class="space-y-2">
                      <a href="https://adssettings.google.com" target="_blank" class="block text-[10px] font-black text-brand-primary uppercase hover:underline">Google Settings</a>
                      <a href="https://www.facebook.com/ads/preferences" target="_blank" class="block text-[10px] font-black text-brand-primary uppercase hover:underline">Facebook Settings</a>
                    </div>
                 </div>
              </div>
            </div>

            <div class="p-10 rounded-[3rem] bg-brand-primary text-white text-center space-y-4 shadow-2xl shadow-brand-primary/20">
               <h4 class="text-2xl font-black">Questions About Cookies?</h4>
               <p class="text-white/80 font-medium">We're happy to clarify how our technology works.</p>
               <a href="mailto:privacy@brandif.co.uk" class="inline-block px-8 py-4 bg-white text-brand-primary rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform">Contact Privacy Team</a>
            </div>

          </div>
        </div>
      </section>

    </div>
  `,
  standalone: false
})
export class CookiesComponent {
  cookieTypes = [
    {
      title: 'Strictly Necessary',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />',
      desc: 'Essential for website functionality. These cannot be disabled.',
      items: ['Session management', 'Security features', 'Basic site functionality']
    },
    {
      title: 'Analytics Cookies',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />',
      desc: 'Help us understand how visitors use our website.',
      items: ['Google Analytics (anonymised)', 'Page views and navigation', 'Time spent on site']
    },
    {
      title: 'Functional Cookies',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />',
      desc: 'Remember your preferences and choices.',
      items: ['Language preferences', 'Region selection', 'Form auto-fill']
    },
    {
      title: 'Marketing Cookies',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.297A1.707 1.707 0 019.312 21h-4.234A1.707 1.707 0 013.39 19.297V5.882c0-1.028.906-1.815 1.916-1.714a30.13 30.13 0 0111.332 0c1.01.101 1.916.886 1.916 1.714v13.415c0 1.028-.906 1.815-1.916 1.714a30.13 30.13 0 01-11.332 0" />',
      desc: 'Track visits across sites for relevant advertising.',
      items: ['Google Ads', 'LinkedIn Insight Tag', 'Facebook Pixel']
    }
  ];
}
