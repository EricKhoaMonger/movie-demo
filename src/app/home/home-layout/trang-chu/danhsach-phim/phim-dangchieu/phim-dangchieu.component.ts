import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-phim-dangchieu',
  templateUrl: './phim-dangchieu.component.html',
  styleUrls: ['./phim-dangchieu.component.css']
})
export class PhimDangchieuComponent implements OnInit, AfterViewInit {
  DanhSachPhimDangChieu = [
    { TenPhim: "The Walking Dead", HinhAnh: '../../../assets/img/sinh-nhat-chet-choc-happy-death-day-c16-15089876590397.jpg' },
    { TenPhim: "Ferdinand", HinhAnh: '../../../assets/img/ferdinand.jpg' },
    { TenPhim: "Ngắm Pháo Hoa", HinhAnh: '../../../assets/img/phao-hoa-nen-ngam-tu-duoi-hay-ben-canh-15088436147700.jpg' },
    { TenPhim: "Nhóc Ma Siêu Quậy", HinhAnh: '../../../assets/img/nhoc-ma-sieu-quay-the-little-vampire-3d-15090331183157.jpg' },
    { TenPhim: "Trải nghiệm điểm chết", HinhAnh: '../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg' },
  ]

  constructor() { }
  ngAfterViewInit() {
    // Owl Carousel required code
    $('.carousel-dangchieu').owlCarousel({
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
    // End here
  }

  ngOnInit() {

  }

}
