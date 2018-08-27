import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {

  public status:boolean = false;

  @Input() GheItem:any;
  @Output() eventDatGhe = new EventEmitter();

  constructor() { }

  DatGhe() {
    this.status = !this.status;

    this.eventDatGhe.emit(this.status);
  }
  ngOnInit() {
  }

}
