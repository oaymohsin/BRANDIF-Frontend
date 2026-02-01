import { Component } from '@angular/core';

@Component({
  selector: 'app-book-consultation',
  template: `
    <div appAos class="relative overflow-hidden selection:bg-brand-primary/30">
      
      <!-- Hero -->
      <section class="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-white dark:bg-[#03070d]">
        <div class="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-brand-primary/5 to-transparent"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div data-aos="fade-down" class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
            <span>Discovery Session</span>
          </div>
          <h1 data-aos="fade-up" data-aos-delay="100" class="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-tight">
            Book Your Free <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-indigo-500 to-indigo-400">30-Minute Consult</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Discuss your project, get expert advice, and explore how Brandif can help—no obligation, no pressure.
          </p>
        </div>
      </section>

      <!-- Grid Content -->
      <section class="py-16 bg-white dark:bg-[#03070d]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            <!-- What to Expect & Prepare -->
            <div data-aos="fade-right" class="space-y-16">
              
              <!-- What we'll cover -->
              <div class="space-y-10">
                <h2 class="text-3xl font-black text-slate-900 dark:text-white">What We'll Cover</h2>
                <div class="space-y-6">
                  <div *ngFor="let item of covers; let i = index" class="flex items-start space-x-5">
                    <div class="w-8 h-8 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 dark:text-white text-lg">{{item.title}}</h4>
                        <p class="text-sm text-slate-500 leading-relaxed">{{item.desc}}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- How to prepare -->
              <div class="p-10 rounded-[3rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-6 shadow-xl">
                 <h3 class="text-2xl font-black text-slate-900 dark:text-white">How to Prepare</h3>
                 <p class="text-slate-600 dark:text-slate-400 font-medium">No formal preparation required, but it helps if you've thought about:</p>
                 <ul class="space-y-3">
                    <li *ngFor="let p of prep" class="flex items-center space-x-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                        <span class="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                        <span>{{p}}</span>
                    </li>
                 </ul>
                 <p class="text-xs text-slate-400 italic pt-4">Don't worry if you don't have answers to everything—that's what the consultation is for.</p>
              </div>

              <!-- Cancellation -->
              <div class="flex items-center space-x-4 p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/10">
                  <svg class="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Need to reschedule? Just use the link in your confirmation email.</p>
              </div>

            </div>

            <!-- Calendar Integration Placeholder -->
            <div data-aos="fade-left" class="lg:sticky lg:top-40">
               <div class="p-4 md:p-8 rounded-[4rem] bg-slate-900 shadow-2xl space-y-8 relative overflow-hidden group">
                  <!-- Abstract Decor -->
                  <div class="absolute -top-20 -right-20 w-60 h-60 bg-brand-primary/20 rounded-full blur-[80px]"></div>
                  
                  <!-- Placeholder UI -->
                  <div class="relative z-10 space-y-8 min-h-[500px] flex flex-col">
                    <div class="flex items-center justify-between border-b border-white/10 pb-6">
                        <div>
                            <h4 class="font-black text-white text-xl">Discovery Session</h4>
                            <p class="text-white/50 text-xs">30 mins • Video Call</p>
                        </div>
                        <div class="px-4 py-2 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-widest">Available Now</div>
                    </div>
                    
                    <!-- Simulating a Calendar -->
                    <div class="grid grid-cols-7 gap-2">
                       <div *ngFor="let day of ['M','T','W','T','F','S','S']" class="text-center text-[10px] font-black text-white/30">{{day}}</div>
                       <div *ngFor="let i of range(31)" class="aspect-square flex items-center justify-center rounded-lg text-sm font-bold transition-colors"
                            [class.text-white]="i+1 > 5" [class.text-white/20]="i+1 <= 5"
                            [class.bg-brand-primary]="i+1 === 12" [class.hover:bg-white/10]="i+1 > 5 && i+1 !== 12">
                          {{i+1}}
                       </div>
                    </div>

                    <div class="space-y-4 pt-8 mt-auto">
                        <p class="text-center text-xs font-bold text-white/50">Select a time (GMT)</p>
                        <div class="grid grid-cols-2 gap-3">
                           <button *ngFor="let time of ['10:00 AM', '11:30 AM', '2:00 PM', '4:30 PM']" class="py-3 rounded-xl border border-white/10 text-white text-xs font-black hover:bg-brand-primary hover:border-brand-primary transition-all">
                             {{time}}
                           </button>
                        </div>
                    </div>
                  </div>

                  <!-- Overlay indicating real tool placeholder -->
                  <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-center p-12 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div class="space-y-4">
                        <svg class="w-12 h-12 text-brand-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                        <h4 class="text-white font-black">Calendar Integration</h4>
                        <p class="text-white/60 text-sm">Replace this placeholder with your Calendly, HubSpot, or SavvyCal embed code.</p>
                      </div>
                  </div>
               </div>
               
               <div class="mt-8 grid grid-cols-2 gap-4">
                  <div class="p-6 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                    <p class="text-lg font-black text-slate-900 dark:text-white">30 Mins</p>
                  </div>
                  <div class="p-6 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Format</p>
                    <p class="text-lg font-black text-slate-900 dark:text-white">Video Call</p>
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
export class BookConsultationComponent {
  covers = [
    { title: 'Understand Your Goals', desc: "We'll ask about your business objectives, current challenges, and what success looks like for you." },
    { title: 'Share Our Expertise', desc: "We'll provide initial thoughts, recommendations, and honest feedback on your ideas." },
    { title: 'Explore Solutions', desc: "We'll discuss potential approaches, technologies, and strategies for your situation." },
    { title: 'Answer Your Questions', desc: "We'll address any questions about process, pricing, timeline, or our capabilities." }
  ];
  prep = [
    "What you're trying to achieve",
    "Who your target audience is",
    "What's currently not working or missing",
    "Rough timeline expectations",
    "Approximate budget range"
  ];

  range(n: number) { return Array(n).fill(0).map((x, i) => i); }
}
