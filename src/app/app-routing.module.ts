import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { IntroSitemapComponent } from './intro-sitemap/intro-sitemap.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  { component: IntroSitemapComponent, path: ''},
  { component: AboutMeComponent, path: 'about-me'},
  { component: ExperienceComponent, path: 'experience'},
  { component: WorkComponent, path: 'work'},
  { component: ContactComponent, path: 'contact'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
