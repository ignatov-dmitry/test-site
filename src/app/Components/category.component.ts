import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Service/Product.service';
import { Observable } from 'rxjs/Observable';
import { UploadFile } from '../Models/UploadFile';
import { Router } from '@angular/router';
import { Category } from '../Models/Category';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-category',
    templateUrl: `../Templates/category.component.html`,
    providers: [ProductService]
})
export class CategoryComponent implements OnInit {
    title = 'Boxy';

    count: number;
    alias: string;
    editedProducts: Product;
    Products: Array<Product>;
    routeSubscription: Subscription;
    constructor(private serv: ProductService, private router: Router, private route: ActivatedRoute, private http: HttpClient) {
        this.Products = new Array<Product>();
        this.routeSubscription = route.params.subscribe(params => this.alias = params['alias']);
    }


    ngOnInit() {
        this.serv.getCategoriesProduct(this.alias).subscribe((data: Product[]) => {
          this.Products = data;
        });
    }


    public Init(link: string) {
        this.serv.getCategoriesProduct(link).subscribe((data: Product[]) => {
          this.Products = data;
        });
    }


 }
