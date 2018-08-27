import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhsach-phim',
  templateUrl: './danhsach-phim.component.html',
  styleUrls: ['./danhsach-phim.component.css']
})
export class DanhsachPhimComponent implements OnInit {
  public danhSachStatus:boolean = true;
  constructor() { }
  ShowDangChieu() {
    this.danhSachStatus = true;
  }
  ShowSapChieu() {
    this.danhSachStatus = false;
  }
  ngOnInit() {
  }

}
