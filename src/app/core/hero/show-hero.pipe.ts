import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showHero'
})
export class ShowHeroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
