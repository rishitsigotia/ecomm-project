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
  showLogin = false;
  errorMessage = "";
  ngOnInit(): void {
    this.seller.reloadSeller() // check if seller is there or not 
  }

  signUp(data:signUp):void{
    
    this.seller.userSignUp(data)
  }

  login(data:signUp):void{
    this.errorMessage =''; //empty it after filling 
    this.seller.userLogin(data)
    this.seller.isLogin.subscribe((error)=>{
      if(error) 
      {
        this.errorMessage = "Username or Password does'nt match";  
      }
    })
  }

  openLogin():void{
    this.showLogin = true;
  }
  
  openSignup():void{
    this.showLogin = false;
  }


}
