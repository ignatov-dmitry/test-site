import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { OtherBuyer } from '../Models/OtherBuyer';

@Injectable()

export class ProductService {
    private url = 'https://localhost:44336/api/';
    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get(this.url + 'Web/Get');
    }

    getCategories() {
        return this.http.get(this.url + 'WebCategory/Get');
    }

    getCategoriesProduct(alias: string) {
        const params = new HttpParams().set('alias', alias);
        return this.http.get(this.url + 'Web/GetProducts', { params });
    }

    getProduct(id: number) {
        const params = new HttpParams().set('id', id.toString());
        return this.http.get(this.url + 'Web/GetProduct', { params });
    }

    addToCart(otherBuyer: OtherBuyer) {
        return this.http.post(this.url + 'WebUserCart/GetCart', otherBuyer);
    }
}
