import { Component, OnInit,  AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-dienanh',
  templateUrl: './dienanh.component.html',
  styleUrls: ['./dienanh.component.css']
})
export class DienanhComponent implements OnInit, AfterViewInit {
  
  DanhSachDienAnh = [
    {TieuDe:"Marvel mua lại DC",HinhAnh:'../../../assets/img/diem-mat-dan-sao-dinh-dam-trong-bom-tan-lien-minh-cong-ly-15106519084263.jpg'},
    { TieuDe:"Ferdinand",HinhAnh:'../../../assets/img/fast-and-furious-9-co-bien-kich-moi-ngay-phat-hanh-cua-phim-doi-tu-2019-sang-2020-15263575332878.jpg'},
    { TieuDe:"Trùm Hương Cảng",HinhAnh:'../../../assets/img/nhom-losers-club-lon-dang-dan-dan-lo-dien-trong-sieu-pham-it-chapter-two-15265444875493.jpg'}, 
  ]

  constructor() { }
  ngAfterViewInit() {
    $('.carousel-dienanh').owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    })
  }
  ngOnInit() {
  }

}
