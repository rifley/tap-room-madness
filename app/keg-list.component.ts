import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li *ngFor="let currentKeg of childKegList">{{currentKeg.name}}-{{currentKeg.brand}}-{{currentKeg.type}}</li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
}
