import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ShoppingItemComponent } from "../../components/shopping-item/shopping-item.component";
import { Product } from '../../types/product.type';
import { CommonModule } from '@angular/common';
import { ShopCartService } from '../../services/shop-cart/shop-cart.service';
import { CartItem } from '../../types/cart-item.type';

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
export class ShoppingCartComponent implements OnInit{

  constructor(private cartService: ShopCartService){}

  ngOnInit(): void {
    this.product_cart = this.cartService.cart()
  }

  product_cart: CartItem[] = []

  subTotal: number = this.product_cart.reduce(function(a, b){
    return a + (b.product.price * b.qty);
  }, 0)

  shipping: number = 9.99

  sumTotal: string = (this.subTotal + this.shipping).toFixed(2)
}
