import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public heroes: {name: string, shouldDisplay: boolean}[] = [
    {name: 'Iron man', shouldDisplay: true},
    {name: 'Captain America', shouldDisplay: true},
    {name: 'Spiderman', shouldDisplay: false}
  ];

  constructor() { }

  addHero(hero: {name: string, shouldDisplay: boolean}): void {
    this.heroes.push(hero);
  }
}
