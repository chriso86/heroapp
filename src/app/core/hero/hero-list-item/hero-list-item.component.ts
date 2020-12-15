import {Component, Input, OnInit} from '@angular/core';
import {HeroModel} from '../hero.model';

@Component({
  selector: 'app-hero-list-item',
  templateUrl: './hero-list-item.component.html'
})
export class HeroListItemComponent implements OnInit {
  @Input() heroItem?: HeroModel;

  constructor() {
  }

  ngOnInit(): void {
  }


}
