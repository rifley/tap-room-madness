import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Welcome to the taproom</h1>
    <new-keg (newKegSender)="addKeg($event)">dsfa</new-keg>
 <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
  <hr>
  <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
  `
})

export class AppComponent {
  selectedKeg = null;
  masterKegList: Keg[] = [
    new Keg('Hop-Venom', 'Boneyard Brewing', 'IPA', 6, 7.2),
    new Keg('Sculpin', 'Ballast Point', 'IPA', 5.5, 6.8),
    new Keg('Brotherhood Steam', 'Anchor', 'Pale Ale', 5, 5.6)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
