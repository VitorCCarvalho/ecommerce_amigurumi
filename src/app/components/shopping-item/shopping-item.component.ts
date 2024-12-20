import { Component, Input } from '@angular/core';
import { CartItem } from '../../types/cart-item.type';
import { ShopCartService } from '../../services/shop-cart/shop-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-item',
  standalone: true,
  imports: [],
  templateUrl: './shopping-item.component.html',
  styleUrl: './shopping-item.component.scss'
})
export class ShoppingItemComponent {
  @Input() cartItem!: CartItem

  constructor(
    private cartService: ShopCartService,
    private router: Router){}

  removeProduct(){
    this.cartService.removeItem(this.cartItem.product.name);
  }

  addProduct(){
    this.cartService.addItem(this.cartItem.product);
  }

  deleteProduct(){
    this.cartService.deleteItem(this.cartItem.product.id)
  }

  navigateToItem(){
    this.router.navigate(['item'], {queryParams: {name: this.cartItem.product.name}})
  }
}
