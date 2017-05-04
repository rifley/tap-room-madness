import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Enter Keg Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Keg Brand:</label>
      <input #newBrand>
    </div>
    <div>
      <label>Enter Keg Type:</label>
      <input #newType>
    </div>
    <div>
      <label>Enter Pour Price:</label>
      <input #newPrice>
    </div>
    <div>
      <label>Enter Keg ABV:</label>
      <input #newABV>
    </div>
    <button (click)="submitForm(newName.value, newBrand.value, newType.value, newPrice.value, newABV.value); newName.value='';  newBrand.value=''; newType.value=''; newPrice.value=''; newABV.value=''; ">Add</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, type: string, price: number, abv: number) {
    var newKegToAdd: Keg = new Keg(name, brand, type, price, abv);
    this.newKegSender.emit(newKegToAdd);
  }
}
