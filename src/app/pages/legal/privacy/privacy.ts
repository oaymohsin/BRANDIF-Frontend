import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  template: `
    <div appAos class="relative overflow-hidden selection:bg-brand-primary/30 min-h-screen bg-white dark:bg-[#03070d]">
      
      <!-- Hero -->
      <section class="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
        <div class="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-brand-primary/5 to-transparent"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div data-aos="fade-up" class="space-y-6 text-center">
            <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-tight">
              Privacy <span class="text-brand-primary">Policy</span>
            </h1>
            <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              How Brandif collects, uses, and protects your personal information.
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
            
            <!-- Introduction -->
            <div class="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <p class="text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                Brandif ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
            </div>

            <!-- Sections -->
            <div class="space-y-16">
              
              <div class="space-y-6">
                <h2 class="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4">
                  <span class="w-2 h-8 bg-brand-primary rounded-full"></span>
                  What Information We Collect
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div class="p-8 rounded-3xl bg-white dark:bg-[#03070d] border border-slate-200 dark:border-white/10">
                      <h4 class="font-black text-brand-primary uppercase tracking-widest text-xs mb-4">Information You Provide</h4>
                      <ul class="space-y-3 text-slate-600 dark:text-slate-400 text-sm font-medium">
                        <li>• Name, email, phone, and company details</li>
                        <li>• Project requirements and business info</li>
                        <li>• Payment information for services</li>
                        <li>• Communication and marketing preferences</li>
                      </ul>
                   </div>
                   <div class="p-8 rounded-3xl bg-white dark:bg-[#03070d] border border-slate-200 dark:border-white/10">
                      <h4 class="font-black text-brand-primary uppercase tracking-widest text-xs mb-4">Automatic Information</h4>
                      <ul class="space-y-3 text-slate-600 dark:text-slate-400 text-sm font-medium">
                        <li>• IP address and browser information</li>
                        <li>• Pages visited and time spent on site</li>
                        <li>• Referring websites and search terms</li>
                        <li>• Device and operating system info</li>
                      </ul>
                   </div>
                </div>
                <div class="p-8 rounded-3xl bg-brand-primary/5 border border-brand-primary/10">
                   <h4 class="font-black text-brand-primary text-sm mb-2">Cookies and Tracking:</h4>
                   <p class="text-sm text-slate-600 dark:text-slate-400">We use cookies and similar technologies to improve website functionality and analyse usage. See our <a routerLink="/privacy/cookies" class="text-brand-primary underline underline-offset-4 font-bold">Cookie Policy</a> for details.</p>
                </div>
              </div>

              <div class="space-y-6">
                <h2 class="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4">
                  <span class="w-2 h-8 bg-brand-primary rounded-full"></span>
                  How We Use Your Information
                </h2>
                <div class="prose prose-slate dark:prose-invert max-w-none">
                  <p>We use collected information to:</p>
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <li>Respond to your enquiries and provide services</li>
                    <li>Send project proposals and information</li>
                    <li>Process payments and maintain accounts</li>
                    <li>Improve our website and services</li>
                    <li>Send marketing communications (with consent)</li>
                    <li>Comply with legal obligations</li>
                    <li>Protect against fraud and security threats</li>
                  </ul>
                </div>
              </div>

              <div class="space-y-6">
                <h2 class="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4">
                  <span class="w-2 h-8 bg-brand-primary rounded-full"></span>
                  Legal Basis for Processing
                </h2>
                <p class="text-slate-600 dark:text-slate-400">Under UK GDPR, we process your personal data based on:</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div *ngFor="let item of legalBasis" class="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <h5 class="font-black text-slate-900 dark:text-white text-sm mb-1 uppercase tracking-widest">{{item.title}}</h5>
                    <p class="text-xs text-slate-500">{{item.desc}}</p>
                  </div>
                </div>
              </div>

              <div class="space-y-6">
                <h2 class="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4">
                  <span class="w-2 h-8 bg-brand-primary rounded-full"></span>
                  Who We Share Your Information With
                </h2>
                <div class="prose prose-slate dark:prose-invert max-w-none">
                  <p>We may share your information with:</p>
                  <ul>
                    <li>Service providers who assist our operations (hosting, email, payment)</li>
                    <li>Professional advisors (solicitors, accountants)</li>
                    <li>Law enforcement or regulatory bodies when legally required</li>
                  </ul>
                  <p class="font-black text-brand-primary">We never sell your personal information to third parties.</p>
                </div>
              </div>

              <div class="space-y-8">
                <h2 class="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-4">
                  <span class="w-2 h-8 bg-brand-primary rounded-full"></span>
                  Your Data Protection Rights
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
                   <div *ngFor="let right of rights" class="flex items-start space-x-3">
                      <div class="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0"></div>
                      <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                        <strong class="text-slate-900 dark:text-white">{{right.title}}:</strong> {{right.desc}}
                      </p>
                   </div>
                </div>
                <div class="p-10 rounded-[2.5rem] bg-slate-900 text-white text-center space-y-4">
                   <h4 class="text-xl font-black">Exercise Your Rights</h4>
                   <p class="text-white/60 text-sm max-w-md mx-auto">To exercise these rights, or if you have any questions about this policy, please contact us.</p>
                   <a href="mailto:privacy@brandif.co.uk" class="inline-block text-brand-primary font-black text-lg hover:scale-105 transition-transform">privacy@brandif.co.uk</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  `,
  standalone: false
})
export class PrivacyComponent {
  legalBasis = [
    { title: 'Consent', desc: "When you've given explicit permission (e.g., marketing emails)" },
    { title: 'Contract', desc: "When necessary to deliver services you've engaged us for" },
    { title: 'Legitimate Interests', desc: "When necessary for our business operations (e.g., website analytics)" },
    { title: 'Legal Obligation', desc: "When required by law" }
  ];

  rights = [
    { title: 'Access', desc: 'Request copies of your personal data' },
    { title: 'Rectification', desc: 'Request correction of inaccurate data' },
    { title: 'Erasure', desc: 'Request deletion of your data' },
    { title: 'Restriction', desc: 'Request limited processing of your data' },
    { title: 'Portability', desc: 'Receive your data in a structured format' },
    { title: 'Objection', desc: 'Object to processing based on legitimate interests' },
    { title: 'Withdraw Consent', desc: 'Withdraw previously given consent at any time' }
  ];
}
