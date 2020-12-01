import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'hero-app';

  ngOnInit(): void {
    const x = this.getValue(10);

    console.log(`X: ${x}`);
  }

  getValue(a: number): number {
    return a * 15;
  }
}
