import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }
  menuType:string = "default";

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if(val.url)
      {
        if(localStorage.getItem('seller') && val.url.includes('seller'))
        {
          this.menuType = "seller"
        }else
        {
          this.menuType="default"
        }
      }
    })
  }

}
