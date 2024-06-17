import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, signUp } from '../data-type';
import { observeNotification } from 'rxjs/internal/Notification';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLogin = new EventEmitter<boolean>(false);
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

  userLogin(data: login) {
    console.warn(data)
    //API CALL 
    this.http //Use `` backtick not '' single string or double quotes, otherwise it will take it as string
      .get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: 'response' })
      .subscribe((result: any) => { // using any to check length otherwise it will give error
        if (result && result.body && result.body.length) {
          this.isSellerLoggedIn.next(true); //this will give the permission to go , but still redirect
          localStorage.setItem('seller', JSON.stringify(result.body)); // keep it locally stored when reload
          this.router.navigate(["seller-home"]); //this will redirect to seller home
        } else {
          console.warn("The user did'nt exist");
          this.isLogin.emit(true);
        }
      })
  }

  reloadSeller() {
    if (localStorage.getItem('seller'))//will check if seller is in localdb or not
    {
      this.isSellerLoggedIn.next(true); //this will give the permission to go , but still redirect
      this.router.navigate(["seller-home"]); //this will redirect to seller home
    }
  }

}
