import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-combo',
  templateUrl: './item-combo.component.html',
  styleUrls: ['./item-combo.component.css']
})
export class ItemComboComponent implements OnInit {

  @Input() ItemDetail: any;
  @Output() emittedEvent = new EventEmitter();

  public itemStatus: boolean =false;
  public quantity: number = 0;
  constructor() { }

  AddItem() {
    this.itemStatus = true;    
    this.quantity++;
    this.emittedEvent.emit(this.itemStatus);
  }

  RemoveItem() {
    if (this.quantity > 0) {
      this.itemStatus = false;      
      this.quantity--;
      this.emittedEvent.emit(this.itemStatus);
    } else {
      alert("Can't do this")
    }
  }
  ngOnInit() {
  }

}
