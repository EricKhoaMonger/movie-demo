import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-popcorn',
  templateUrl: './popcorn.component.html',
  styleUrls: ['./popcorn.component.css']
})
export class PopcornComponent implements OnInit {

  public DsPopcorn: any[] = [
    {
      Ten: "Bắp rang 50oz - Phô Mai",
      Gia: 55000,
      Hinh: 'https://cdn.shopify.com/s/files/1/1733/1257/products/DSC_0206_1800x.jpg?v=1522806659',
      SoLuong: 0
    },
    {
      Ten: "Bắp rang 60oz - Phô Mai",
      Gia: 65000,
      Hinh: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/12/8/1/JE0205H_Cacio-Pepe-Popcorn_s4x3.jpg.rend.hgtvcom.616.462.suffix/1481216491893.jpeg',
      SoLuong: 0
    }
  ];
  public itemCounter: number;

  public DsPopOrder: any[] = [];
  constructor() { }

  eventCount(counter: number) {
    this.itemCounter = counter;
  }
  eventPop(popStatus: boolean, item: any) {

    if (popStatus && !this.DsPopOrder.length) {
      item.SoLuong++;
      this.DsPopOrder.push(item);
    }
    else if (popStatus && this.DsPopOrder.length) {
      for (let i = 0; i < this.DsPopOrder.length; i++) {
        if (item.Ten !== this.DsPopOrder[i].Ten) {          
          item.SoLuong++;
          this.DsPopOrder.push(item);
          console.log(this.DsPopOrder)
        } else {
          this.DsPopOrder[i].SoLuong++;
        }
      }
    }



    else {
      for (let i = 0; i < this.DsPopOrder.length; i++) {
        if (item.Ten == this.DsPopOrder[i].Ten && this.DsPopOrder[i].SoLuong == 1) {
          this.DsPopOrder[i].SoLuong--;
          this.DsPopOrder.splice(i, 1);
          break;
        } else {
          this.DsPopOrder[i].SoLuong--;
          break;
        }
      }
    }
  }
  ngOnInit() {
  }

}
