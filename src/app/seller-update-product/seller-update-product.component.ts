import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData : undefined | product
  constructor(private route : ActivatedRoute , private product : ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    productId && this.product.getProduct(productId).subscribe((data) =>{
      this.productData = data;
    })
  }
  update(data:product){
    
  }

}
