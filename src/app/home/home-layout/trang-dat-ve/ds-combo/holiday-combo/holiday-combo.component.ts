import { Component, OnInit } from '@angular/core';
import { BROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-holiday-combo',
  templateUrl: './holiday-combo.component.html',
  styleUrls: ['./holiday-combo.component.css']
})
export class HolidayComboComponent implements OnInit {
  public DsHolidayCombo:any[]= [
    {
      Ten: "Combo 1",
      Gia: 25000,
      Hinh:'https://film.ca/wp-content/uploads/2015/01/Popcorn-Pop-Candy-Combo-Oakville-Movie-Cinema1.jpg'
    },
    {
      Ten: "Combo 2",
      Gia: 35000,
      Hinh:'http://www.chewonthatblog.com/wp-content/uploads/2012/12/78364441.jpg'
    },
    {
      Ten: "Combo 3",
      Gia: 40000,
      Hinh:'https://film.ca/wp-content/uploads/2015/01/Oakville-Kids-Combo-Movie-Theatre1.jpg'
    },{
      Ten: "Combo 4",
      Gia: 45000,
      Hinh:'http://www.marcustheatres.com/media/images/combo-ultra.jpg'
    },
    {
      Ten: "Combo 5",
      Gia: 55000,
      Hinh:'https://png.pngtree.com/element_origin_min_pic/17/07/30/debdf75ab52b2d14a9fdc5969aadfd3d.jpg'
    }
  ];
  public DsHolidayOrder:any[] = [];
  constructor() { }


  eventHoliday(holidayStatus:boolean,item:any){
    if(holidayStatus){
      this.DsHolidayOrder.push(item)
    }
    else {
      for(let i = 0; i < this.DsHolidayOrder.length; i++) {
        if(item.Ten == this.DsHolidayOrder[i].Ten) {
          this.DsHolidayOrder.splice(i,1);
          break;
        }
      }
    }
    console.log(this.DsHolidayOrder)
  }
  ngOnInit() {
  }

}
