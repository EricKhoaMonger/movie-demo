import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { TrangChuComponent } from './home-layout/trang-chu/trang-chu.component';
import { TrangChiTietComponent } from './home-layout/trang-chi-tiet/trang-chi-tiet.component';
import { TrangDatVeComponent } from './home-layout/trang-dat-ve/trang-dat-ve.component';
import { HeaderComponent } from './home-layout/header/header.component';
import { SliderComponent } from './home-layout/trang-chu/slider/slider.component';
import { DanhsachPhimComponent } from './home-layout/trang-chu/danhsach-phim/danhsach-phim.component';
import { DanhsachTintucComponent } from './home-layout/trang-chu/danhsach-tintuc/danhsach-tintuc.component';
import { LienheComponent } from './home-layout/trang-chu/lienhe/lienhe.component';
import { PhimDangchieuComponent } from './home-layout/trang-chu/danhsach-phim/phim-dangchieu/phim-dangchieu.component';
import { PhimSapchieuComponent } from './home-layout/trang-chu/danhsach-phim/phim-sapchieu/phim-sapchieu.component';
import { PhimItemComponent } from './home-layout/trang-chu/danhsach-phim/phim-item/phim-item.component';
import { DienanhComponent } from './home-layout/trang-chu/danhsach-tintuc/dienanh/dienanh.component';
import { ReviewComponent } from './home-layout/trang-chu/danhsach-tintuc/review/review.component';
import { KhuyenmaiComponent } from './home-layout/trang-chu/danhsach-tintuc/khuyenmai/khuyenmai.component';
import { TintucItemComponent } from './home-layout/trang-chu/danhsach-tintuc/tintuc-item/tintuc-item.component';
import { FormLienheComponent } from './home-layout/trang-chu/lienhe/form-lienhe/form-lienhe.component';
import { ThongtinLienheComponent } from './home-layout/trang-chu/lienhe/thongtin-lienhe/thongtin-lienhe.component';
import { GheComponent } from './home-layout/trang-dat-ve/ghe/ghe.component';
import { DsGheComponent } from './home-layout/trang-dat-ve/ds-ghe/ds-ghe.component';
import { QuanlyGheComponent } from './home-layout/trang-dat-ve/quanly-ghe/quanly-ghe.component';
import { ComboComponent } from './home-layout/trang-dat-ve/combo/combo.component';
import { DsComboComponent } from './home-layout/trang-dat-ve/ds-combo/ds-combo.component';
import { PopcornComponent } from './home-layout/trang-dat-ve/ds-combo/popcorn/popcorn.component';
import { HolidayComboComponent } from './home-layout/trang-dat-ve/ds-combo/holiday-combo/holiday-combo.component';
import { DrinksComponent } from './home-layout/trang-dat-ve/ds-combo/drinks/drinks.component';
import { ItemComboComponent } from './home-layout/trang-dat-ve/ds-combo/item-combo/item-combo.component';
import { DangKyComponent } from './home-layout/dang-ky/dang-ky.component';

import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { DangNhapComponent } from './home-layout/dang-nhap/dang-nhap.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeLayoutComponent,     
    TrangChuComponent,     
    TrangChiTietComponent,     
    TrangDatVeComponent,     
    HeaderComponent, 
    SliderComponent, 
    DanhsachPhimComponent, 
    DanhsachTintucComponent, 
    LienheComponent, 
    PhimDangchieuComponent, PhimSapchieuComponent, 
    PhimItemComponent, 
    DienanhComponent, 
    ReviewComponent, 
    KhuyenmaiComponent, 
    TintucItemComponent, 
    FormLienheComponent, 
    ThongtinLienheComponent,
    GheComponent,
    DsGheComponent,
    QuanlyGheComponent,
    ComboComponent,
    DsComboComponent,
    PopcornComponent,
    HolidayComboComponent,
    DrinksComponent,
    ItemComboComponent,
    DangKyComponent,
    DangNhapComponent
  ],
  exports: [
    HomeLayoutComponent,     
    TrangChuComponent,     
    TrangChiTietComponent,     
    TrangDatVeComponent,     
    HeaderComponent, 
    SliderComponent, 
    DanhsachPhimComponent, 
    DanhsachTintucComponent, 
    LienheComponent, 
    PhimDangchieuComponent, PhimSapchieuComponent, 
    PhimItemComponent, 
    DienanhComponent, 
    ReviewComponent, 
    KhuyenmaiComponent, 
    TintucItemComponent, 
    FormLienheComponent, 
    ThongtinLienheComponent,
    GheComponent,
    DsGheComponent,
    QuanlyGheComponent,
    DangKyComponent,
    DangNhapComponent
  ],
})
export class HomeModule { }
