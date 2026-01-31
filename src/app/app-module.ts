import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    FooterComponent
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
