import { Injectable } from '@angular/core';
import {HeroModel} from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public heroes: HeroModel[] = [
    new HeroModel('Iron man'),
    new HeroModel('Captain America'),
    new HeroModel('Spiderman', false)
  ];

  constructor() { }

  addHero(hero: {name: string, shouldDisplay: boolean}): void {
    this.heroes.push(hero);
  }
}
