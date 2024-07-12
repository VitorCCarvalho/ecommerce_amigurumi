import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ShoppingItemComponent } from "../../components/shopping-item/shopping-item.component";
import { CommonModule } from '@angular/common';
import { ShopCartService } from '../../services/shop-cart/shop-cart.service';
import { CartItem } from '../../types/cart-item.type';
import { Observable } from 'rxjs';

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

  cart!: CartItem[]

  subTotal!: number

  shipping: number = 9.99

  sumTotal!: string 
  constructor(private cartService: ShopCartService){}

  ngOnInit(): void {
    this.cartService.getItems().subscribe((cart) => {
      this.cart = cart
      this.subTotal = this.cart.reduce(function(a, b){
        if(b.product.sale && b.product.salePrice != null){
          return a + (b.product.salePrice * b.qty);
        } else{
          return a + (b.product.price * b.qty);
        }
      }, 0)
      this.sumTotal = (this.subTotal + this.shipping).toFixed(2)
    })
  }

}
