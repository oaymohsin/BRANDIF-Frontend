import { Component } from '@angular/core';

@Component({
  selector: 'app-get-quote',
  template: `
    <div appAos class="relative overflow-hidden selection:bg-indigo-500/30">
      <!-- Hero -->
      <section class="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-white dark:bg-[#03070d]">
        <div class="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-indigo-500/5 to-transparent"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div data-aos="fade-down" class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
            <span>Proposal Request</span>
          </div>
          <h1 data-aos="fade-up" data-aos-delay="100" class="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-tight">
            Get a Detailed <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-400">Project Proposal</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Tell us about your requirements and we'll provide a comprehensive proposal with pricing, timeline, and our recommended approach.
          </p>
        </div>
      </section>

      <!-- Form Section -->
      <section class="py-16 bg-white dark:bg-[#03070d]">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form class="space-y-16">
            
            <!-- Section 1: About You -->
            <div data-aos="fade-up" class="space-y-8">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-xs">1</div>
                <h2 class="text-2xl font-black text-slate-900 dark:text-white">About You</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 rounded-[3rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10">
                <div class="space-y-2">
                  <label class="text-xs font-black text-slate-400 uppercase tracking-widest pl-4">Full Name *</label>
                  <input type="text" class="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-transparent focus:border-indigo-500 outline-none transition-all font-bold text-slate-900 dark:text-white">
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-black text-slate-400 uppercase tracking-widest pl-4">Email Address *</label>
                  <input type="email" class="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-transparent focus:border-indigo-500 outline-none transition-all font-bold text-slate-900 dark:text-white">
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-black text-slate-400 uppercase tracking-widest pl-4">Company Name *</label>
                  <input type="text" class="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-transparent focus:border-indigo-500 outline-none transition-all font-bold text-slate-900 dark:text-white">
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-black text-slate-400 uppercase tracking-widest pl-4">Your Role *</label>
                  <input type="text" class="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-transparent focus:border-indigo-500 outline-none transition-all font-bold text-slate-900 dark:text-white">
                </div>
              </div>
            </div>

            <!-- Section 2: Your Project -->
            <div data-aos="fade-up" class="space-y-8">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-xs">2</div>
                <h2 class="text-2xl font-black text-slate-900 dark:text-white">Your Project</h2>
              </div>
              <div class="space-y-10 p-10 rounded-[3rem] bg-indigo-500/5 dark:bg-white/[0.02] border border-indigo-500/10 dark:border-white/10">
                <div class="space-y-4">
                  <label class="text-xs font-black text-indigo-500 uppercase tracking-widest pl-4">Services of Interest *</label>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <label *ngFor="let s of services" class="flex items-center space-x-3 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 cursor-pointer hover:border-indigo-500 transition-all">
                      <input type="checkbox" class="w-4 h-4 rounded text-indigo-500">
                      <span class="text-xs font-bold text-slate-700 dark:text-slate-300">{{s}}</span>
                    </label>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="space-y-2">
                    <label class="text-xs font-black text-slate-400 uppercase tracking-widest pl-4">Timeline *</label>
                    <select class="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-transparent focus:border-indigo-500 outline-none transition-all font-bold text-slate-900 dark:text-white appearance-none">
                      <option>Urgent (Start < 2 weeks)</option>
                      <option>Soon (1-2 months)</option>
                      <option>Flexible (3+ months)</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                  <div class="space-y-2">
                    <label class="text-xs font-black text-slate-400 uppercase tracking-widest pl-4">Approximate Budget *</label>
                    <select class="w-full px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-transparent focus:border-indigo-500 outline-none transition-all font-bold text-slate-900 dark:text-white appearance-none">
                      <option>Under £5,000</option>
                      <option>£5,000 - £10,000</option>
                      <option>£10,000 - £25,000</option>
                      <option>£25,000 - £50,000</option>
                      <option>£50,000+</option>
                    </select>
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-xs font-black text-slate-400 uppercase tracking-widest pl-4">Project Details *</label>
                  <textarea rows="6" placeholder="Tell us about your goals, target audience, and key features..." class="w-full px-6 py-4 rounded-3xl bg-white dark:bg-white/5 border border-transparent focus:border-indigo-500 outline-none transition-all font-bold text-slate-900 dark:text-white"></textarea>
                </div>
              </div>
            </div>

            <!-- Section 3: Final Touches -->
            <div data-aos="fade-up" class="space-y-8">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-xs">3</div>
                <h2 class="text-2xl font-black text-slate-900 dark:text-white">Final Touches</h2>
              </div>
              <div class="p-10 rounded-[3rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-8">
                <div class="space-y-4">
                  <label class="text-xs font-black text-slate-400 uppercase tracking-widest pl-4">Existing Assets</label>
                  <div class="flex flex-wrap gap-3">
                    <label *ngFor="let asset of assets" class="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 cursor-pointer hover:border-indigo-500 transition-all">
                      <input type="checkbox" class="rounded text-indigo-500">
                      <span class="text-xs font-bold text-slate-700 dark:text-slate-300">{{asset}}</span>
                    </label>
                  </div>
                </div>
                <div class="flex items-start space-x-3 text-xs text-slate-400 pl-4">
                    <input type="checkbox" class="mt-1">
                    <span>I consent to Brandif processing my data for the purpose of creating this proposal. *</span>
                </div>
                <button class="w-full py-5 bg-black dark:bg-indigo-500 text-white rounded-full font-black text-sm uppercase tracking-[0.2em] hover:shadow-2xl transition-all transform active:scale-95 group">
                  Submit Proposal Request
                  <span class="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                </button>
              </div>
            </div>

          </form>
        </div>
      </section>

      <!-- Proposal Process -->
      <section class="py-24 bg-slate-50 dark:bg-[#03070d]/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div class="space-y-4">
                <div class="text-indigo-500 text-4xl font-black">24H</div>
                <h4 class="text-lg font-black text-slate-900 dark:text-white">Quick Review</h4>
                <p class="text-sm text-slate-500">We'll confirm receipt and ask any clarifying questions within one business day.</p>
            </div>
            <div class="space-y-4">
                <div class="text-indigo-500 text-4xl font-black">3-5D</div>
                <h4 class="text-lg font-black text-slate-900 dark:text-white">Full Proposal</h4>
                <p class="text-sm text-slate-500">Receive a detailed strategy documents, accurate timeline, and transparent pricing breakdown.</p>
            </div>
            <div class="space-y-4">
                <div class="text-indigo-500 text-4xl font-black">∞</div>
                <h4 class="text-lg font-black text-slate-900 dark:text-white">No Pressure</h4>
                <p class="text-sm text-slate-500">Take all the time you need to review. We're here to answer questions when you're ready.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  `,
  styles: [],
  standalone: false
})
export class GetQuoteComponent {
  services = [
    'AI Voice Agents', 'AI Chatbots', 'Web Development', 'Mobile Apps', 'Social Media SMM', 'SEO / PPC', 'Branding', 'Digital Strategy', 'eCommerce'
  ];
  assets = ['Brand Guidelines', 'Technical Brief', 'Existing Website', 'Market Research', 'Competitor List'];
}
