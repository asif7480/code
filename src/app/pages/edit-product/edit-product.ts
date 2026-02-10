import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct {

    

    productObj: Product = {
      productName: "",
      description: "",
      price: 0
    }
    constructor(private readonly productService: ProductService){

    }



    handleSubmit(){
      
    }
}
