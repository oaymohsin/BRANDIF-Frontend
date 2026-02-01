import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
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

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    FooterComponent,
    SocialMediaMarketingComponent,
    SeoServicesComponent,
    PpcAdvertisingComponent,
    EcommerceSolutionsComponent,
    DesignBrandingComponent,
    DigitalConsultancyComponent,
    WorkComponent,
    AboutComponent,
    InsightsComponent,
    ArticleDetailComponent,
    ContactComponent,
    GetQuoteComponent,
    BookConsultationComponent,
    PrivacyComponent,
    CookiesComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
