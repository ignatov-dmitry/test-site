import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductService } from '../Service/Product.service';
import { Product } from '../Models/Product';

@Component({
    selector: 'app-product',
    template: `<a routerLink="">Назад</a>
    <h3>Страница продукта {{productView.Id}}</h3>
    <div>{{productView.Name}}</div>
    <div>{{productView.Price}}</div>
    <div><img *ngIf="urlPath != null " src="http://localhost:49539/{{urlPath}}" alt="{{altText}}" title="{{titleText}}"></div>`,
    providers: [ProductService]
})
export class ProductComponent {
    public product: number;
    public urlPath: string;
    public altText: string;
    public titleText: string;
    public productView = new Product(0, '', '', '', 0, 0, '', [], '');

    public routeSubscription: Subscription;
    constructor(private route: ActivatedRoute, private http: HttpClient, private productService: ProductService) {

        this.routeSubscription = route.params.subscribe(params => this.product = params['id']);

        this.productService.getProduct(this.product).subscribe((data: Product) => {
            this.productView.Id = data.Id;
            this.productView.Name = data.Name;
            this.productView.Price = data.Price;
            this.urlPath = (data.Files.length > 0) ? data.Files[0].Path : null;
            this.altText = (data.Files.length > 0) ? data.Files[0].Alt : '';
            this.titleText = (data.Files.length > 0) ? data.Files[0].Title : '';
        });

    }

}
