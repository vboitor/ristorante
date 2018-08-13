import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {
  menu_items : any[]=
  [
    {
      "_id": "5b6f92c2733c4fcb4aa3180c",
      "index": 0,
      "isActive": false,
      "price": "$21.39",
      "picture": "assets/img/food/aaa_sirloin_steak_sandwich.png",
      "name": "sirloin steak",
      "description": "Enim rep derit tempor ad enim eu ad volupta ad enim."
    },
    {
      "_id": "5b6f92c2956da6f372bf6fd2",
      "index": 1,
      "isActive": true,
      "price": "$27.79",
      "picture": "assets/img/food/black_blue.png",
      "name": "black blue",
      "description": "Laboris sit dolor ad occaecat ex aute non ad conse."
    },
    {
      "_id": "5b6f92c242ee9785547ac87a",
      "index": 2,
      "isActive": false,
      "price": "$23.72",
      "picture": "assets/img/food/braised_beef_short_rib.png",
      "name": "braised beef short rib",
      "description": "Elit officia in et minim nulla nulla officia excepteur amet."
    },
    {
      "_id": "5b6f92c2fbd852f920f9fe17",
      "index": 3,
      "isActive": true,
      "price": "$20.26",
      "picture": "assets/img/food/classic_caesar.png",
      "name": "classic caesar",
      "description": "Sunt ipsum dolor in aute eiusmod excepteur consequat amet deserunt."
    },
    {
      "_id": "5b6f92c2c710a1b58ca7972d",
      "index": 4,
      "isActive": false,
      "price": "$13.49",
      "picture": "assets/img/food/halibut_burger.png",
      "name": "halibut burger",
      "description": "Anim id incididunt est excepteur aute ipsum est in Lorem consectetur culpa."
    },
    {
      "_id": "5b6f92c248ec0c2b9623b89a",
      "index": 5,
      "isActive": true,
      "price": "$15.02",
      "picture": "assets/img/food/halibut_chips.png",
      "name": "halibut chips",
      "description": "Enim dolor incididunt proident anim Lorem veniam eiusmod commodo labore."
    },
    {
      "_id": "5b6f92c21fab1dca00fdf9ed",
      "index": 6,
      "isActive": true,
      "price": "$29.85",
      "picture": "assets/img/food/pan_fried_squid.png",
      "name": "pan fried squid",
      "description": "Sit Lorem ipsum Lorem nostrud officia ut consequat eu consectetur irure."
    },
    {
      "_id": "5b6f92c25bbf8bd51943bfd1",
      "index": 7,
      "isActive": false,
      "price": "$28.89",
      "picture": "assets/img/food/prime_rib_cheddar_burger.png",
      "name": "prime rib burger",
      "description": "Deserunt id laboris exercitation qui non cillum aliqua tempor. "
    },
    {
      "_id": "5b6f92c217ac648dbe41cceb",
      "index": 8,
      "isActive": true,
      "price": "$14.90",
      "picture": "assets/img/food/pulled_pork_dinner.png",
      "name": "pulled pork",
      "description": "Irure ullamco amet proident velit eiusmod fugiat id deserunt"
    },
    {
      "_id": "5b6f92c215d5961a1a013663",
      "index": 9,
      "isActive": false,
      "price": "$13.43",
      "picture": "assets/img/food/truffle_parmesan_frites.png",
      "name": "truffle parmesan",
      "description": "Laborum incididunt fugiat ullamco deserunt culpa."
    },
    {
      "_id": "5b6f92c21dc9a16477523fe7",
      "index": 10,
      "isActive": true,
      "price": "$19.11",
      "picture": "assets/img/food/turkey_club.png",
      "name": "turkey club",
      "description": "In eiusmod conse non dolor amet et. Dolore labore laborum aliqua."
    },
    {
      "_id": "5b6f92c24369d580383541d5",
      "index": 11,
      "isActive": true,
      "price": "$24.61",
      "picture": "assets/img/food/walnut_prawns.png",
      "name": "walnut prawns",
      "description": "Sint pariatur irure ex aliquip in quis qui aliqua ipsum. Culpa amet consequat."
    }
  ]
  constructor() { }

  /**
   * Service method that returns restaurant menu items
   * @param url 
   */
  public getMenuList(url?: string): Observable<any[]> {
    return of(this.menu_items);
  }

}
