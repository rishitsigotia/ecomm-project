import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  constructor(private product : ProductService) { }
  productList : undefined | product[];
  productMessage : undefined| string;

  ngOnInit(): void {
  this.showList();
  }
  
  deleteProduct(id:number){
    if(id != null){
      this.product.deleteProduct(id).subscribe((result) =>
      {
        if(result)
        {
          this.productMessage = "Product is Deleted";
          this.showList();
          }
      }
      )
    }
    setTimeout(() =>{
      this.productMessage = undefined;
    },3000)
  }

  showList(){
    this.product.productList().subscribe((result)=>{
      this.productList = result;
    })  
  }

}
