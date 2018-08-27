import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './admin-layout/dashboard/dashboard.component';
import { QuanLyPhimComponent } from './admin-layout/quan-ly-phim/quan-ly-phim.component';
import { QuanLyNguoiDungComponent } from './admin-layout/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminLayoutComponent, DashboardComponent, QuanLyPhimComponent, QuanLyNguoiDungComponent]
})
export class AdminModule { }
