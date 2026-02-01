import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  template: `
    <div appAos class="relative overflow-hidden selection:bg-brand-primary/30 min-h-screen bg-white dark:bg-[#03070d]">
      
      <!-- Hero -->
      <section class="relative pt-32 pb-16 md:pt-48 md:pb-24">
        <div class="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-brand-primary/5 to-transparent"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div data-aos="fade-up" class="space-y-6">
            <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-tight">
              Terms & <span class="text-brand-primary">Conditions</span>
            </h1>
            <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              The terms governing use of Brandif's website and services.
            </p>
            <div class="pt-8 text-center flex items-center justify-center space-x-3">
               <span class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                 Last Updated: February 1, 2026
               </span>
               <span class="text-slate-300 dark:text-white/10">•</span>
               <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest">v2.0</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Content -->
      <section class="pb-32">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            <!-- Sidebar Nav (Sticky) -->
            <div class="hidden lg:block">
              <div class="sticky top-32 space-y-2 p-6 rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10">
                <p class="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em] mb-4 px-3">Sections</p>
                <a *ngFor="let s of sections" [href]="'#'+s.id" class="block px-3 py-2 text-sm font-bold text-slate-500 hover:text-brand-primary transition-colors">
                  {{s.title}}
                </a>
              </div>
            </div>

            <!-- Main Legal Content -->
            <div class="lg:col-span-3">
              <div data-aos="fade-up" class="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-[4rem] p-8 md:p-20 space-y-24">
                
                <!-- Intro -->
                <div class="prose prose-xl prose-slate dark:prose-invert max-w-none">
                  <p class="font-medium text-slate-700 dark:text-slate-300">
                    These Terms and Conditions ("Terms") govern your use of the Brandif website and services. By accessing our website or engaging our services, you agree to these Terms. Brandif is registered in England and Wales.
                  </p>
                </div>

                <!-- Dyn Sections -->
                <div *ngFor="let section of sections" [id]="section.id" class="space-y-8 scroll-mt-32">
                  <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white flex items-center gap-4">
                    <span class="w-2 h-10 bg-brand-primary rounded-full"></span>
                    {{section.title}}
                  </h2>
                  <div class="prose prose-lg prose-slate dark:prose-invert max-w-none" [innerHTML]="section.content"></div>
                </div>

                <!-- Termination Specific -->
                <div class="p-10 rounded-[3rem] bg-slate-900 text-white space-y-6">
                   <h3 class="text-2xl font-black">Termination</h3>
                   <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                      <div class="space-y-2">
                        <p class="font-black text-brand-primary uppercase tracking-widest text-xs">Notice Period</p>
                        <p class="text-white/60">30 days written notice for ongoing services. Immediate notice if material breach occurs.</p>
                      </div>
                      <div class="space-y-2">
                        <p class="font-black text-brand-primary uppercase tracking-widest text-xs">Post-Termination</p>
                        <p class="text-white/60">Final payments settled for work completed. Return of confidential materials required.</p>
                      </div>
                   </div>
                </div>

                <!-- Contact Footer -->
                <div class="pt-16 border-t border-slate-200 dark:border-white/10 text-center space-y-6">
                  <h3 class="text-2xl font-black text-slate-900 dark:text-white">Questions About These Terms?</h3>
                  <div class="flex flex-col md:flex-row items-center justify-center gap-6">
                    <a href="mailto:legal@brandif.co.uk" class="flex items-center space-x-3 px-8 py-4 bg-brand-primary text-white rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                      <span>legal@brandif.co.uk</span>
                    </a>
                    <div class="text-left text-xs text-slate-500">
                      <p class="font-black uppercase tracking-widest mb-1">Postal Address</p>
                      <p>Brandif, London, United Kingdom</p>
                    </div>
                  </div>
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
export class TermsComponent {
  sections = [
    {
      id: 'services',
      title: 'Our Services',
      content: `
        <p><strong>Scope:</strong> Services are provided as described in individual project proposals and agreements. All services are subject to our acceptance of your project.</p>
        <p><strong>Project Agreements:</strong> Specific projects proceed under separate written agreements outlining scope, deliverables, timeline, and fees.</p>
      `
    },
    {
      id: 'payment',
      title: 'Fees and Payment',
      content: `
        <p><strong>Pricing:</strong> Fees are as quoted in proposals or agreements. Prices are in British Pounds (GBP) and exclude VAT unless stated.</p>
        <ul class="space-y-4">
          <li><strong>Deposits:</strong> Typically 30-50% to commence work.</li>
          <li><strong>Milestones:</strong> Payments as outlined in project agreements.</li>
          <li><strong>Final Payment:</strong> Due upon project completion.</li>
        </ul>
        <p><strong>Late Payment:</strong> Late payments may incur interest at 8% above Bank of England base rate per annum.</p>
      `
    },
    {
      id: 'ip',
      title: 'Intellectual Property',
      content: `
        <p><strong>Client Ownership:</strong> Upon full payment, you own the final deliverables created specifically for your project.</p>
        <p><strong>Brandif Ownership:</strong> We retain ownership of pre-existing materials, tools, development methodologies, and general experience.</p>
        <p><strong>Portfolio Rights:</strong> We reserve the right to showcase completed work in our portfolio unless confidentiality is contractually agreed.</p>
      `
    },
    {
      id: 'warranties',
      title: 'Warranties and Disclaimers',
      content: `
        <p>We warrant that services will be performed with reasonable skill and care. However, we do not guarantee specific search rankings, conversion results, or future compatibility with all third-party systems.</p>
        <p><strong>Third-Party:</strong> We're not liable for performance of third-party services like hosting or social platforms.</p>
      `
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      content: `
        <p>Our total liability is limited to the fees paid for the specific project. We are not liable for indirect losses, loss of profits, data corruption, or downtime.</p>
      `
    },
    {
      id: 'responsibilities',
      title: 'Client Responsibilities',
      content: `
        <p>You agree to provide accurate information, timely feedback, and necessary materials. You warrant that you have authority to engage our services and that provided content doesn't infringe rights.</p>
      `
    },
    {
      id: 'disputes',
      title: 'Dispute Resolution',
      content: `
        <p>We resolve disputes through good-faith negotiation, followed by mediation if agreed. These Terms are governed by the laws of England and Wales.</p>
      `
    }
  ];
}
