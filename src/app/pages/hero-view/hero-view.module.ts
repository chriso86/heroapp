import {NgModule} from '@angular/core';
import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroModule} from '../../core/hero/hero.module';
import {HeroViewRoutingModule} from './hero-view-routing.module';
import {HeroViewComponent} from './hero-view.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    HeroViewRoutingModule,
    HeroModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    HeroViewComponent,
    HeroListComponent
  ]
})
export class HeroViewModule {
}
