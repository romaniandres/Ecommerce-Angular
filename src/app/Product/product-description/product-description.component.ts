import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  id!: Number;
  product!: Product;

  constructor(private service: ServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(data => {
      this.id = Number(data.get("id"));
      this.product = this.service.getAllProducts().filter(product => product.id === this.id)[0];
    });
  }

}
