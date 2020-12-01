import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  public heroName: string = 'Thor';
  public heroes: string[] = [
    'Iron man',
    'Captain America',
    'Spiderman'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addHero(): void {
    this.heroes.push(this.heroName);
  }
}
