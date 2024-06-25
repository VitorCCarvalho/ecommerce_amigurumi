import { Component } from '@angular/core';
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
export class ShoppingCartComponent {

  constructor(private cartService: ShopCartService){}

  product_cart: CartItem[] = this.cartService.cart()

  subTotal: number = this.product_cart.reduce(function(a, b){
    return a + (b.product.price * b.qty);
  }, 0)

  shipping: number = 9.99

  sumTotal: string = (this.subTotal + this.shipping).toFixed(2)
}
