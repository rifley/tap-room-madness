import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">
      <h3>{{childSelectedKeg.name}}</h3>
      <hr>
      <h3>Edit Keg</h3>
      <label>Enter keg name:</label>
      <input [(ngModel)]="childSelectedKeg.name">
      <label>Enter keg brand:</label>
      <input [(ngModel)]="childSelectedKeg.brand">
      <label>Enter keg type:</label>
      <input [(ngModel)]="childSelectedKeg.type">
      <label>Enter keg price:</label>
      <input [(ngModel)]="childSelectedKeg.price">
      <label>Enter keg abv:</label>
      <input [(ngModel)]="childSelectedKeg.abv">
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  finishedEditing() {
    this.doneButtonClickedSender.emit();
  }
}
