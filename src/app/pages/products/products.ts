import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrl: './products.css',
  imports: [RouterLink],
})
export class Products {
  products: Product[] = [];

  ngOnInit() {
    this.getAllProducts();
  }

  constructor(private readonly productService: ProductService) {}

  getAllProducts() {
    return this.productService.getAllProducts().subscribe((response: any) => {
      this.products = response;
      console.log(this.products);
    });
  }

  handleDelete(id: any){
    this.productService.deleteProduct(id).subscribe( () => {
      alert("product deleted")
      this.getAllProducts()
      // this.products.filter( (product) => product.id !== id )
    })
  }
}
