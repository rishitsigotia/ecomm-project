import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';
import { retry } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient , private route : Router) { }

  addProduct(data:product)
  {
   return this.http.post("http://localhost:3000/products",data,{observe:'response'}).
    subscribe((result) => {
      this.route.navigate(["seller-home"]);
  });
  }
  productList()
  {
    return this.http.get<product[]>('http://localhost:3000/products')
  }

  deleteProduct(id:number){
    
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
}
