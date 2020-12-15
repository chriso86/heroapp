import {NgModule} from '@angular/core';
import {HeroListItemComponent} from './hero-list-item/hero-list-item.component';
import {HeroService} from './hero.service';
import { ShowHeroPipe } from './show-hero.pipe';

@NgModule({
  declarations: [
    HeroListItemComponent,
    ShowHeroPipe
  ],
  exports: [
    HeroListItemComponent,
    ShowHeroPipe
  ],
  providers: [
    HeroService
  ]
})
export class HeroModule {
}
