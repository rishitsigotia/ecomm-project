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
  sellerName:string ="";
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if(val.url)
      {
        if(localStorage.getItem('seller') && val.url.includes('seller'))
        {
          this.menuType = "seller"
          let sellerStore = localStorage.getItem('seller');
          let sellerDate = sellerStore && JSON.parse(sellerStore)[0]; //checking if exist then parse it
          this.sellerName = sellerDate.name;
        }else
        {
          this.menuType="default"
        }
      }
    })
  }
  logout(){
    localStorage.removeItem('seller');// remove the seller stored in local
    this.route.navigate(['/']); // after removing redirect it to home page  
  }
}
