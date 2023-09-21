import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductListItem} from "./pages/product-men/dataModel/ProductListItem";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  getProducts(){

    return this.http.get(`${this.apiUrl}/products`);
  }
}
