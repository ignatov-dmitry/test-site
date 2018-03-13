import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import {Routes, RouterModule} from '@angular/router';

import { ProductComponent } from './Components/Product.component';
import { ProductsComponent } from './Components/products.component';
import { NotFoundComponent } from './Components/not-found.component';
import { CategoryComponent } from './Components/category.component';
import { CartComponent } from './Components/cart.component';
import { ProductService } from './Service/Product.service';
import { Product } from './Models/Product';


const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'category/:alias', component: CategoryComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NotFoundComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
