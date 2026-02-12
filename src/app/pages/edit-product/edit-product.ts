import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct {
  productObj: Product = {
    productName: '',
    description: '',
    price: 0,
  };
  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.productService.getSingleProduct(id).subscribe((response) => {
      this.productObj = response as Product;
    });
  }

  handleSubmit(id: string) {
    this.productService.updateProduct(id, this.productObj).subscribe((response) => {
      alert(`Product has been updated.`);
      this.router.navigate(['']);
    });
  }
}
