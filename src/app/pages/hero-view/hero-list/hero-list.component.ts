import { Component, OnInit } from '@angular/core';
import {HeroService} from '../../../core/hero/hero.service';
import {HeroModel} from '../../../core/hero/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  public heroName: string = 'Thor';

  constructor(public heroService: HeroService) { }

  ngOnInit(): void {
  }

  addHero(): void {
    this.heroService.addHero(
      new HeroModel(this.heroName)
    );
  }
}
