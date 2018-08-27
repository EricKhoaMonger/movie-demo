import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit,AfterViewInit {
  DanhSachReview = [
    { TieuDe:"Sự Kiện KFC",HinhAnh:'http://billnguyen.com/wp-content/uploads/2014/04/Event-Showcase1-2.jpg'},
    { TieuDe:"Sự Kiện Lotte",HinhAnh:'https://static.ybox.vn/2018/3/7/6196b406-2228-11e8-b466-56c566ee3692.png'},
    { TieuDe:"Sự Kiện Texas",HinhAnh:'http://cafefcdn.com/thumb_w/650/2017/2061185419-kien-nhan-1501344528133.jpg'}, 
  ]





  constructor() { }
  ngAfterViewInit() {
    $('.carousel-review').owlCarousel({
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
