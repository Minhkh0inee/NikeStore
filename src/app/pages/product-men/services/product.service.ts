import { Injectable } from '@angular/core';
import {ApiService} from "../../../api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) { }

  public getProductList():Observable<any>{
    return this.apiService.getProducts()
  }
}
