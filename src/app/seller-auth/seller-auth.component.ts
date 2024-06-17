import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller : SellerService , private router : Router) { }
  showLogin = false
  ngOnInit(): void {
    this.seller.reloadSeller() // check if seller is there or not 
  }

  signUp(data:signUp):void{
    
    this.seller.userSignUp(data)
  }

  login(data:signUp):void{
    
    this.seller.userSignUp(data)
  }

  openLogin():void{
    this.showLogin = true;
  }
  
  openSignup():void{
    this.showLogin = false;
  }


}
