import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Welcome to the taproom</h1>
  <keg-list [childKegList]="masterKegList"></keg-list>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Hop-Venom', 'Boneyard Brewing', 'IPA', 6, 7.2),
    new Keg('Sculpin', 'Ballast Point', 'IPA', 5.5, 6.8),
    new Keg('Brotherhood Steam', 'Anchor', 'Pale Ale', 5, 5.6)
  ]
}
