import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/Product';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Array<Product>;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.service.getAllProducts();
  }

  redirectToDescription(id: Number) {
    this.router.navigate(["product-description"], {queryParams: {id: id}});
  }

}
