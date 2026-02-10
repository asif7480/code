import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
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
}
