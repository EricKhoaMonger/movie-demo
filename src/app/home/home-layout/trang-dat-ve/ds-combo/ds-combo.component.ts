import { Component, OnInit, ViewChild } from '@angular/core';
import { PopcornComponent } from './popcorn/popcorn.component';
import { DrinksComponent } from './drinks/drinks.component';
import { HolidayComboComponent } from './holiday-combo/holiday-combo.component';

@Component({
  selector: 'app-ds-combo',
  templateUrl: './ds-combo.component.html',
  styleUrls: ['./ds-combo.component.css']
})
export class DsComboComponent implements OnInit {
  @ViewChild(PopcornComponent) popCom:PopcornComponent;
  @ViewChild(DrinksComponent) drinkCom:DrinksComponent;
  @ViewChild(HolidayComboComponent) holidayCom:HolidayComboComponent;
  constructor() { }
  public itemCounter:number;

  ngOnInit() {
  }

}
