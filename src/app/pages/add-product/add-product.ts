import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [ FormsModule ],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

  productObj: Product = {
    productName: "",
    description: "",
    price: 0
  }

  constructor(private readonly productService: ProductService, private router: Router){}
  
  handleSubmit(){
    console.log(this.productObj);
    this.productService.addProduct(this.productObj).subscribe( () => {
      alert("form submitted")
      this.router.navigate([""])
    })
  }
}
