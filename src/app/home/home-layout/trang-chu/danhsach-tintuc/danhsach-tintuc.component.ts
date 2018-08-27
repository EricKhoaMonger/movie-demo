import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhsach-tintuc',
  templateUrl: './danhsach-tintuc.component.html',
  styleUrls: ['./danhsach-tintuc.component.css']
})
export class DanhsachTintucComponent implements OnInit {

  public statucTinTuc: string = 'dienanh';
  constructor() { }

  ngOnInit() {
  }
  ShowDienAnh() {
    this.statucTinTuc = 'dienanh';
  }
  ShowReview() {
    this.statucTinTuc = 'review';
  }
  ShowKhuyenMai() {
    this.statucTinTuc = 'khuyenmai';
  }
}
