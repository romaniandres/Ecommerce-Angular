import { Injectable } from '@angular/core';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getAllProducts() {
    // Mocking products
    let product1 = new Product(1, "Galaxy A72", "Smartphone Samsung Galaxy A72", 65000, "samsung-smartphone-galaxy-a72-6gb-128gb-6.7");
    let product2 = new Product(2, "Moto G100", "Smartphone Motorola Moto G100", 85000, "moto-g100");
    let product3 = new Product(3, "Play Station 5", "Consola de videojuegos Play Station 5", 180000, "ps5");
    let product4 = new Product(4, "Notebook Asus Gamer", "Notebook Asus Rog Gamer i7, 16GB Ram, RTX 2060", 200000, "notebook-gamer-asus-rog");

    // Add products to the list
    let products = new Array();
    products.splice(0, 0, product1, product2, product3, product4);
    return products;
  }

}
