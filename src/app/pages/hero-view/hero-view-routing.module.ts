import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {HeroListComponent} from './hero-list/hero-list.component';

const HERO_ROUTES: Route[] = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: HeroListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(HERO_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroViewRoutingModule {
}
