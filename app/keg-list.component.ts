import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li *ngFor="let currentKeg of childKegList">{{currentKeg.name}}-{{currentKeg.brand}}-{{currentKeg.type}}<button (click)="editKeg(currentKeg)">Edit!</button></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editKeg(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
