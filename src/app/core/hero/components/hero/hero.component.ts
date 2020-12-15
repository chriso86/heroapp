import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from '../../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  @Input() heroObject: {name: string, shouldDisplay: boolean} | null;

  constructor(public heroService: HeroService) {
    this.heroObject = null;
  }

  ngOnInit(): void {
  }


}
