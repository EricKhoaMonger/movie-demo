import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  public DsNuoc: any[] = [
    {
      Ten: "Coke 22oz",
      Gia: 25000,
      Hinh: 'https://www.colbeck.co.uk/wp-content/uploads/2017/11/021120-Coca-Cola-1.5L.jpg'
    },
    {
      Ten: "coke 30oz",
      Gia: 35000,
      Hinh: 'https://cdn.shopify.com/s/files/1/2231/8055/products/Coke_Regular_Soda_2L_P55_1024x1024.jpg?v=1507012717'
    },
    {
      Ten: "coke 40oz",
      Gia: 40000,
      Hinh: 'http://www.bigronsbistro.com/wp-content/uploads/2014/02/diet-coke.jpg'
    }
  ];

  public DsDrinkOrder: any[] = [];

  constructor() { }

  eventDrinks(status: boolean, item: any) {
    if(status){
      this.DsDrinkOrder.push(item)
    }
    else {
      for(let i = 0; i < this.DsDrinkOrder.length; i++) {
        if(item.Ten == this.DsDrinkOrder[i].Ten) {
          this.DsDrinkOrder.splice(i,1);
          break;
        }
      }
    }
    console.log(this.DsDrinkOrder)
  }
  

  ngOnInit() {
  }

}
