import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ShoppingItemComponent } from "../../components/shopping-item/shopping-item.component";
import { Product } from '../../types/product.type';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-shopping-cart',
    standalone: true,
    templateUrl: './shopping-cart.component.html',
    styleUrl: './shopping-cart.component.scss',
    imports: [
      CommonModule,
      HeaderComponent, 
      ShoppingItemComponent]
})
export class ShoppingCartComponent {
  product_cart: Product[] = [
    {
      id: 0,
      name: 'Bear',
      price: 39.99,
      imgSrc: "/assets/png/bear.png"
    },
    {
      id: 0,
      name: 'Bear',
      price: 39.99,
      imgSrc: "/assets/png/bear.png"
    },
    {
      id: 0,
      name: 'Bear',
      price: 39.99,
      imgSrc: "/assets/png/bear.png"
    },
    {
      id: 0,
      name: 'Bear',
      price: 39.99,
      imgSrc: "/assets/png/bear.png"
    }
  ]

  subTotal: number = this.product_cart.reduce(function(a, b){
    return a + b.price;
  }, 0)

  shipping: number = 9.99

  sumTotal: string = (this.subTotal + this.shipping).toFixed(2)
}
