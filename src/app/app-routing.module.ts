import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { IntroSitemapComponent } from './intro-sitemap/intro-sitemap.component';

const routes: Routes = [
  { component: IntroSitemapComponent, path: ''},
  { component: AboutMeComponent, path: 'about-me'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
