import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { AddProduct } from './pages/add-product/add-product';
import { EditProduct } from './pages/edit-product/edit-product';

export const routes: Routes = [
    { path: "", component: Home, title: "Home" },
    { path: "products", component: Products, title: "Products" },
    { path: "addProduct", component: AddProduct, title: "Add Product" },
    { path: "products/editProduct/:id", component: EditProduct, title: "Edit product"}
];
