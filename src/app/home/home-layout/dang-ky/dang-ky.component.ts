import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {

  dangkyFormGroup:FormGroup;
  noSpecCharPattern:RegExp = /^[a-zA-Z0-9]{4,10}$/;
  namePattern: string = `^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$`;

  public today = new Date();
  public DsNguoiDung:any[] = [];

  constructor(private dangkyFormBuilder:FormBuilder) { 
    this.CreateFormGroup()
  }

  DangKy(nguoiDung:any) {
    this.DsNguoiDung.push(nguoiDung);
  }

  public CapNhat() {
    this.dangkyFormGroup.setValue({
      TaiKhoan:'khoa95',
      HoTen:'Khoa Nguyen',
      MatKhau:'123456',
      Email:'khoa@mail.com',
      SoDT:'123213123',
      MaLoaiNguoiDung:'kh'
    })
  }

  CreateFormGroup() {
    this.dangkyFormGroup = this.dangkyFormBuilder.group({
      TaiKhoan:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10),Validators.pattern(this.noSpecCharPattern)]],
      MatKhau:['',[Validators.required,Validators.minLength(5),Validators.maxLength(8),Validators.pattern(this.noSpecCharPattern)]],
      HoTen:['',[Validators.required,Validators.pattern(this.namePattern)]],
      Email:['',[Validators.required,Validators.email]],
      SoDT:['',[Validators.required,Validators.minLength(9),Validators.maxLength(13)]],
      MaLoaiNguoiDung:['',[Validators.required]]
    })
  }
  
  ngOnInit() {
  }

}
