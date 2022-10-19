import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  data!: IProduct[]
  constructor (private productService: ProductService) {

  }

  ngOnInit(): void {
    // chạy
    this.getProductList();

  }

  // khai báo
  getProductList() {
    this.productService.getProductList().subscribe(data => {
      this.data = data;
    })
  }
  onHandelRemove(id: number) {
    this.productService.removeProduct(id).subscribe(() => {
      this.data = this.data.filter(item => item.id !== id);
    })
  }
  onHandelUpdate(product: IProduct) {
    this.productService.updateProduct(product).subscribe(() => {
      this.data = this.data.filter(item => item.id !== product.id ? product : item);
    })
  }

}