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
import { AppComponent } from '../app.component';
import { CartLine } from '../Models/CartLine';
import { OtherBuyer } from '../Models/OtherBuyer';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-cart',
    templateUrl: `../Templates/cart.component.html`,
    providers: [ProductService]
})


export class CartComponent implements OnInit  {
    public cartView: Array<Product>;
    public cartLine: Array<CartLine>;
    public message: string;
    public sum: number;
    public user: OtherBuyer;
    constructor(public appComp: AppComponent, public serv: ProductService) {
        this.cartView = new Array<Product>();
        this.user = new OtherBuyer();
    }

    ngOnInit() {
        if (localStorage.getItem('Cart') !== null && localStorage.getItem('Cart') !== '') {
            this.cartLine = JSON.parse(localStorage.getItem('Cart'));

            for (let i = 0; i < this.cartLine.length; i++) {
                this.cartLine[i].ProductId = this.cartLine[i].product.Id;
                this.sum = this.cartLine[i].product.Price * this.cartLine[i].count;
            }
        }
    }

    public send() {
        this.user.CartLines = this.cartLine;
        this.serv.addToCart(this.user).subscribe();
    }
}
