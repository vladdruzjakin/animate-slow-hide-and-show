import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
    animations: [
    trigger('slowAnimate', [
      transition(':enter', [style({opacity: '0'}), animate(1000)]),
      transition(':leave', [style({opacity: '1'}), animate(1000, style({opacity: '0'}))]),
    ])
  ]
})
export class AppComponent  {
  public stateAnimate: boolean;

  constructor() {
    this.stateAnimate = false;
  }

  public animate(): void {
    this.stateAnimate = true;
    setTimeout(() => {
      return this.stateAnimate = false;
    }, 2000);
  }
}

