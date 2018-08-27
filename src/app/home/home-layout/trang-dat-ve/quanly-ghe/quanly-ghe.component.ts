import { Component, OnInit, ViewChild } from '@angular/core';
import { DsGheComponent } from '../ds-ghe/ds-ghe.component';

@Component({
  selector: 'app-quanly-ghe',
  templateUrl: './quanly-ghe.component.html',
  styleUrls: ['./quanly-ghe.component.css']
})
export class QuanlyGheComponent implements OnInit {

  @ViewChild(DsGheComponent) dsGheCmpnt:DsGheComponent;
  constructor() { }

  ThemGhe(so:number,ten:string,gia:number) {
    this.dsGheCmpnt.ThemGhe(so,ten,gia);
  }
  ngOnInit() {
  }
  
}
