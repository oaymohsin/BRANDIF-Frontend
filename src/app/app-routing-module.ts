import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AiVoiceAgentsComponent } from './pages/services/ai-voice-agents/ai-voice-agents';
import { AiChatbotsComponent } from './pages/services/ai-chatbots/ai-chatbots';
import { WebAppDevelopmentComponent } from './pages/services/web-app-development/web-app-development';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services/ai-voice-agents', component: AiVoiceAgentsComponent },
  { path: 'services/ai-chatbots', component: AiChatbotsComponent },
  { path: 'services/web-app-development', component: WebAppDevelopmentComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
