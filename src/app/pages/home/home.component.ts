import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data!: IProduct[]
  @Input('data') myName: string = "";
  username!:string ;
  constructor(private productService: ProductService) {

    //this.products = this.ProductService.getProductList()!;
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (user) {
      this.username = user.username

    }
    
    // console.log(JSON.parse(String(localStorage?.getItem("user"))).user.username);
    this.getProductList();
  }
  getProductList() {
    this.productService.getProductList().subscribe(data => {
      this.data = data;
    })
  }
}
