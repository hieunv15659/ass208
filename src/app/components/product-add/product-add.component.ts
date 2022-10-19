import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  // @Output() createProduct = new EventEmitter<{ name: string, price: number }>();
  product: IProduct = {
    name: "",
    price: 0,
    status: true,
    subject: ""
  }
  constructor (
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

    if (id) {
      // nếu có id thì call service get product để lấy thông tin trả về form
      this.productService.getProduct(id).subscribe(data => this.product = data);
    }
  }
  onSubmit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // call services edit product
      // nếu thành công thì trả về sản phẩm vừa cập nhật xong
      this.productService.updateProduct(this.product).subscribe((data: any) => console.log(data))
      this.router.navigateByUrl('admin/list');
    } else {
      // call service add product
      this.productService.addProduct(this.product).subscribe(data => {
        // chuyển hướng router
        this.router.navigateByUrl('admin/list');
      })
    }
  }
}