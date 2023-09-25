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
    status: 0,
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 0,
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 1,
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 1,
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 1,
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 0,
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 1,
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }, {
    img: "assets/images/essentials-img-1.jpg",
    status: 1,
    type: 'Nike Sportswear',
    name: "Men's Max90 T-Shirt",
    color: 2,
    price: "1,019,000"
  }];

  // Initialize checkbox values
  categoryASelected: boolean = false;
  categoryBSelected: boolean = false;
  categoryMenSelected: boolean = false;
  categoryUnisexSelected: boolean = false;
  categoryWomenSelected: boolean = false;
  categoryOversizeSelected: boolean = false;
  categoryLooseSelected: boolean = false;
  categorySlimSelected: boolean = false;
  categoryTightSelected: boolean = false;
  categoryStandardSelected: boolean = false;
  categoryUnder1000000Selected: boolean = false;
  categoryFrom1000000To2000000Selected: boolean = false;
  categoryFrom2000000To4999999TightSelected: boolean = false;
  categoryAbove5000000StandardSelected: boolean = false;

  filterProducts() {

    if (!this.categoryASelected && !this.categoryBSelected && !this.categoryMenSelected && !this.categoryUnisexSelected && !this.categoryWomenSelected
      && !this.categoryOversizeSelected && !this.categoryLooseSelected && !this.categorySlimSelected && !this.categoryStandardSelected && !this.categoryTightSelected
    && !this.categoryUnder1000000Selected && !this.categoryAbove5000000StandardSelected && !this.categoryFrom1000000To2000000Selected && !this.categoryFrom2000000To4999999TightSelected) {
      return this.productList;
    }


    // Filter products based on checkbox selections
    return this.productList.filter(product => {
      if (this.categoryASelected && this.categoryBSelected && this.categoryMenSelected && this.categoryUnisexSelected) {
        return true; // Show all products when both checkboxes are selected
      } else if (this.categoryASelected) {
        return product.status === 1;
      } else if (this.categoryBSelected) {
        return product.status === 2;
      } else if (this.categoryMenSelected) {
        return product.gender === 'men'
      } else if (this.categoryUnisexSelected) {
        return product.gender === 'unisex'
      } else if (this.categoryWomenSelected) {
        return product.gender === 'women'
      } else if (this.categoryUnisexSelected) {
        return product.gender === 'unisex'
      }
      else if (this.categoryOversizeSelected) {
        return product.fit === 'oversize'
      }
      else if (this.categorySlimSelected) {
        return product.fit === 'slim'
      }
      else if (this.categoryLooseSelected) {
        return product.fit === 'loose'
      }
      else if (this.categoryTightSelected) {
        return product.fit === 'tight'
      }
      else if (this.categoryStandardSelected) {
        return product.fit === 'standard'
      }
      else if (this.categoryUnder1000000Selected) {
        return product.prices < 1000000
      }
      else if (this.categoryFrom2000000To4999999TightSelected) {
        return product.prices < 4999999 && product.prices > 2000000
      }
      else if (this.categoryFrom1000000To2000000Selected) {
        return product.prices > 1000000 && product.prices < 2000000
      }
      else if (this.categoryAbove5000000StandardSelected) {
        return product.prices > 5000000
      }

      else {
        return false; // No checkboxes selected, don't show any products
      }
    });
  }


  public productList: any[] = []

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
