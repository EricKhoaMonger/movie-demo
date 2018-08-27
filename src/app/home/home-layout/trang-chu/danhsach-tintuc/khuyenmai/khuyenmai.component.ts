import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-khuyenmai',
  templateUrl: './khuyenmai.component.html',
  styleUrls: ['./khuyenmai.component.css']
})
export class KhuyenmaiComponent implements OnInit ,AfterViewInit{
  DanhSachKhuyenMai = [
    { TieuDe:"Khuyến Mãi 1",HinhAnh:'https://media.vietteltelecom.vn/upload/ckfinder/images/3112.png'},
    { TieuDe:"Khuyến Mãi 2",HinhAnh:'https://topshare.s3.amazonaws.com/production/posts/pictures/000/000/145/original/kichi-kichi-khuyen-mai.jpg?1502809882'},
    { TieuDe:"Khuyến Mãi 3",HinhAnh:'http://giaydantuong365.com/uploads/user/2/khuyenmaigiay/khuyen-mai-giay-dan-tuong-dep-gia-re-cuc-soc.jpg'}, 
  ]
  constructor() { }
  ngAfterViewInit() {
    $('.carousel-khuyenmai').owlCarousel({
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
