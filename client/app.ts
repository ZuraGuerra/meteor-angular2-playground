import 'reflect-metadata';
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import template from './app.html';

@Component({
  selector: 'app',
  template
})
class Electrolit {
  periquis: Array<Object>;

  constructor() {
    this.periquis = [
      {
        'name': 'Milorad',
        'color': 'green',
        'favorite_fruit': 'apple'
      }
    ];
  }
}

bootstrap(Electrolit);
