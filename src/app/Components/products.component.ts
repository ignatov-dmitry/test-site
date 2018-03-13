import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductService } from '../Service/Product.service';
import { Observable } from 'rxjs/Observable';
import { UploadFile } from '../Models/UploadFile';
import { Router } from '@angular/router';
import { Category } from '../Models/Category';
import { NgForm} from '@angular/forms';
import { error, Session } from 'selenium-webdriver';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-products',
    templateUrl: '../Templates/products.component.html',
    styleUrls: ['../app.component.css'],
    providers: [ProductService]
})

export class ProductsComponent implements OnInit {
    title = 'Boxy';

    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

    editedProducts: Product;
    Products: Array<Product>;
    isNewRecord: boolean;
    statusMessage: string;
    idProduct: number;
    message: string;

    constructor(private serv: ProductService, private appComp: AppComponent) {
      this.Products = new Array<Product>();
    }

    ngOnInit() {
      this.loadProducts();
    }
    private loadProducts() {
      this.serv.getProducts().subscribe((data: Product[]) => {
        this.Products = data;
      });
    }


    addProduct() {
      this.editedProducts = new Product(0, '', '', '', 0, 0, '', [], '');
      this.Products.push(this.editedProducts);
      this.isNewRecord = true;
  }

    loadTemplate(product: Product) {
      if (this.editedProducts && this.editedProducts.Id === product.Id) {
          return this.editTemplate;
      } else {
          return this.readOnlyTemplate;
      }
  }
}

