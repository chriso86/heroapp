import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroViewModule} from './pages/hero-view/hero-view.module';

const ROUTES: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: 'hero', loadChildren: () => import('./pages/hero-view/hero-view-routing.module').then(m => m.HeroViewRoutingModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
