import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  productObj: Product = {
    productName: "",
    description: "",
    price: 0
  }
  
}
