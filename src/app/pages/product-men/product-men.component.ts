import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
import {Observable} from "rxjs";
import {ProductService} from "./services/product.service";
import {ProductListItem} from "./dataModel/ProductListItem";
import {
  logBuilderStatusWarnings
} from "@angular-devkit/build-angular/src/builders/browser-esbuild/builder-status-warnings";

@Component({
  selector: 'app-product-men',
  templateUrl: './product-men.component.html',
  styleUrls: ['./product-men.component.scss']
})
export class ProductMenComponent implements OnInit {
  cardData = [{
    img: "assets/images/essentials-img-1.jpg",
    status: 'Just In',
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 'Just In',
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 'Just In',
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 'Just In',
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 'Just In',
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 'Just In',
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 'Just In',
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 'Just In',
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }];

  public productList: any[]=[]

  constructor(private productService: ProductService, private apiService: ApiService) {
  }

  ngOnInit() {
    // @ts-ignore
    this.apiService.getProducts().subscribe((data: any[]) => {
      console.log(data)
      this.productList = data;
      console.log(this.productList[0].img)
    });
  }


}
