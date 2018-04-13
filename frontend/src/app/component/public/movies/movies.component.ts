import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { Product, ProductService } from '../../../service/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import {STATUS_NO_CONTENT, PRODUCTS_IMG_URL} from "../../../util";

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.component.html'
})

export class MoviesComponent {

  router: Router;
  products: Product[];
  img_url: string;

  constructor(private service: ProductService, private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute) {
    this.img_url = PRODUCTS_IMG_URL;
  }

    ngOnInit() {

        this.service.getAllProducts(2).subscribe(
        products => this.products = products,
        error => console.log(error)
      );
    }
  }
