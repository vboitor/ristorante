import { Component, OnInit } from '@angular/core';
import { MenuListService } from './menu-list.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  
  menu_items : any[];
 
  constructor(private menuListService: MenuListService) {  }

  ngOnInit() {
    this.menuListService.getMenuList().subscribe(
      (data: any[]) => {
          this.menu_items = data;
      });
  }

}
