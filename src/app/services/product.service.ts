import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API_URL = "http://localhost:3000/products"

  constructor(private readonly http: HttpClient){}

  getAllProducts(){
    return this.http.get(this.API_URL)
  }

  getSingleProduct(id: string){
    return this.http.get(`${this.API_URL}/${id}`)
  }

  addProduct(newProduct: Product){
    return this.http.post(this.API_URL, newProduct)
  }

  updateProduct(id: string, newProduct: Product){
    return this.http.put(`${this.API_URL}/${id}`, newProduct)
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.API_URL}/${id}`)
  }

}
