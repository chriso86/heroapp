import { Component, OnInit } from '@angular/core';
import {HeroService} from '../../core/hero/hero.service';

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
    this.heroService.addHero({
      name: this.heroName,
      shouldDisplay: true
    });
  }
}
