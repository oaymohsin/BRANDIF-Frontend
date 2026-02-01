import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AiVoiceAgentsComponent } from './pages/services/ai-voice-agents/ai-voice-agents';
import { AiChatbotsComponent } from './pages/services/ai-chatbots/ai-chatbots';
import { WebAppDevelopmentComponent } from './pages/services/web-app-development/web-app-development';
import { SocialMediaMarketingComponent } from './pages/services/social-media-marketing/social-media-marketing';
import { SeoServicesComponent } from './pages/services/seo-services/seo-services';
import { PpcAdvertisingComponent } from './pages/services/ppc-advertising/ppc-advertising';
import { EcommerceSolutionsComponent } from './pages/services/ecommerce-solutions/ecommerce-solutions';
import { DesignBrandingComponent } from './pages/services/design-branding/design-branding';
import { DigitalConsultancyComponent } from './pages/services/digital-consultancy/digital-consultancy';
import { WorkComponent } from './pages/work/work';
import { AboutComponent } from './pages/about/about';
import { InsightsComponent } from './pages/insights/insights';
import { ArticleDetailComponent } from './pages/insights/article-detail/article-detail';
import { ContactComponent } from './pages/contact/contact';
import { GetQuoteComponent } from './pages/contact/get-quote/get-quote';
import { BookConsultationComponent } from './pages/contact/book-consultation/book-consultation';
import { PrivacyComponent } from './pages/legal/privacy/privacy';
import { CookiesComponent } from './pages/legal/cookies/cookies';
import { TermsComponent } from './pages/legal/terms/terms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services/ai-voice-agents', component: AiVoiceAgentsComponent },
  { path: 'services/ai-chatbots', component: AiChatbotsComponent },
  { path: 'services/web-app-development', component: WebAppDevelopmentComponent },
  { path: 'services/social-media-marketing', component: SocialMediaMarketingComponent },
  { path: 'services/seo-services', component: SeoServicesComponent },
  { path: 'services/ppc-advertising', component: PpcAdvertisingComponent },
  { path: 'services/ecommerce-solutions', component: EcommerceSolutionsComponent },
  { path: 'services/design-branding', component: DesignBrandingComponent },
  { path: 'services/digital-consultancy', component: DigitalConsultancyComponent },
  { path: 'work', component: WorkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'insights/:id', component: ArticleDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/get-quote', component: GetQuoteComponent },
  { path: 'contact/book-consultation', component: BookConsultationComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'privacy/cookies', component: CookiesComponent },
  { path: 'terms', component: TermsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
