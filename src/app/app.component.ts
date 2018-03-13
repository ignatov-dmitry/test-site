import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from './Models/Product';
import { ProductService } from './Service/Product.service';
import { Observable } from 'rxjs/Observable';
import { UploadFile } from './Models/UploadFile';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { Category } from './Models/Category';
import { CartLine } from './Models/CartLine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})

export class AppComponent implements OnInit {

  Categories: Array<Category>;
  Cart: Array<Product>;
  cartLine: CartLine;
  cartLines: Array<CartLine>;
  matchId: number;
  constructor(private serv: ProductService) {
    this.Categories = new Array<Category>();
    this.Cart = new Array<Product>();
    this.cartLine = new CartLine();
    this.cartLines = new Array<CartLine>();
  }
  ngOnInit() {
    this.loadCategories();
  }

  public loadCategories() {
    this.serv.getCategories().subscribe((data: Category[]) => {
      this.Categories = data;
    });
  }


  public addToCart(product: Product) {
    this.matchId = -1;
    if (localStorage.getItem('Cart') === null || localStorage.getItem('Cart') === '') {
      this.cartLine.product = product;
      this.cartLine.count = 1;
      localStorage.setItem('Cart', JSON.stringify(this.cartLine));
      this.cartLines.push(JSON.parse(localStorage.getItem('Cart')));
      localStorage.setItem('Cart', JSON.stringify(this.cartLines));
    } else {
      this.cartLine.product = product;
      this.cartLine.count = 1;
      this.cartLines = JSON.parse(localStorage.getItem('Cart'));

      for (let i = 0; i < this.cartLines.length; i++) {
        if (this.cartLines[i].product.Id === this.cartLine.product.Id) {
          this.matchId = i;
          console.log(i);
          break;
        }
      }
      if (this.matchId === -1) {
        this.cartLines.push(this.cartLine);
        localStorage.setItem('Cart', JSON.stringify(this.cartLines));
      } else {
        this.cartLines[this.matchId].count++;
        localStorage.setItem('Cart', JSON.stringify(this.cartLines));
        this.matchId = -1;
      }
    }
    this.cartLines = [];
  }

  public clearCart() {
    localStorage.setItem('Cart', '');
    this.cartLines = [];
    this.matchId = -1;
  }
}
