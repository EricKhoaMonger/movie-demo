import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tintuc-item',
  templateUrl: './tintuc-item.component.html',
  styleUrls: ['./tintuc-item.component.css']
})
export class TintucItemComponent implements OnInit {
  @Input() TinTucItem: any;
  constructor() { }

  
  ngOnInit() {
  }

}
