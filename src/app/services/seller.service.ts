import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { signUp } from '../data-type';
import { observeNotification } from 'rxjs/internal/Notification';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: signUp) {
    let result = this.http
      .post("http://localhost:3000/seller", data, { observe: 'response' })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true); //this will give the permission to go , but still redirect
        localStorage.setItem('seller', JSON.stringify(result.body)); // keep it locally stored when reload
        this.router.navigate(["seller-home"]); //this will redirect to seller home
      });
  }

  reloadSeller() {
    if (localStorage.getItem('seller'))//will check if seller is in localdb or not
    {
      this.isSellerLoggedIn.next(true); //this will give the permission to go , but still redirect
      this.router.navigate(["seller-home"]); //this will redirect to seller home
    }
  }

}
