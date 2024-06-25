import { Injectable, signal } from '@angular/core';
import { CartItem } from '../../types/cart-item.type';
import { Product } from '../../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {
  bear: Product = {
    id: 0,
    name: "Urso",
    price: 49.99,
    imgSrc: "/assets/png/bear.png",
    desc: ""
  }

  constructor() { }

  cart = signal<CartItem[]>([
    {
      product: this.bear,
      qty: 1
    }
  ])
  
  addItem(item: Product){
    this.cart.update((currentCart) => {
      const existingItem = currentCart.find((i) => 
        i.product.id === item.id
      );

      if(existingItem){
        existingItem.qty += 1
      } else {
        let cartItem : CartItem = {
          product: item,
          qty: 1
        }

        currentCart.push(cartItem);
      }

      return currentCart;
    })
  }

  removeItem(productId: number){
    this.cart.update((currentCart) =>{
      const item = currentCart.find((i) =>
        i.product.id === productId
      )

      if(item){
        if(item.qty > 1){
          item.qty -= 1
        } else{
          let index = currentCart.indexOf(item)
          currentCart.splice(index, 1)
        }
      }

      return currentCart
    })
  }
}
