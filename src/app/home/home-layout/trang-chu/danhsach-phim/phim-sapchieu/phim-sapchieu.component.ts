import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-phim-sapchieu',
  templateUrl: './phim-sapchieu.component.html',
  styleUrls: ['./phim-sapchieu.component.css']
})
export class PhimSapchieuComponent implements OnInit, AfterViewInit {

  DanhSachPhimSapChieu = [
    {TenPhim:"Thor: Ragnarok",HinhAnh:'../../../assets/img/thor-ragnarok-15088151416399.jpg'},
    {TenPhim:"Ferdinand",HinhAnh:'../../../assets/img/pokemon-to-chon-cau-pokemon-i-choose-you-15095249219579.jpg'},
    {TenPhim:"Trùm Hương Cảng",HinhAnh:'../../../assets/img/trum-huong-cang-chasing-the-dragon-15088270130890.jpg'},
    {TenPhim:"Ferdinand",HinhAnh:'../../../assets/img/ferdinand.jpg'},
    {TenPhim:"Trải nghiệm điểm chết",HinhAnh:'../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg'},
  ];


  constructor() { }
  ngAfterViewInit() {
    $('.carousel-sapchieu').owlCarousel({
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
