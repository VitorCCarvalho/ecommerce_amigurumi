import { Injectable, afterRender, signal } from '@angular/core';
import { CartItem } from '../../types/cart-item.type';
import { Product } from '../../types/product.type';
import { Subject } from 'rxjs';

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

  cartSource!: Subject<CartItem[]>
  cart = signal<CartItem[]>([])

  constructor() {
    afterRender(() => {
      const storage = localStorage.getItem('cart')!= null ? JSON.parse(localStorage.getItem('cart')  || "") : []
      this.cartSource = new Subject<CartItem[]>();
      this.cart = signal<CartItem[]>(localStorage.getItem('cart')!= null ? JSON.parse(localStorage.getItem('cart')  || "") : [])
    }
      )
   }

  
  
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

    this.syncCart()
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
    this.syncCart()
  }

  deleteItem(productId: number){
    this.cart.update((currentCart) =>{
      const item = currentCart.find((i) =>
        i.product.id === productId
      )

      if(item){
        let index = currentCart.indexOf(item)
        currentCart.splice(index, 1)
      }

      return currentCart
    })
    this.syncCart()
  }

  syncCart(){
    localStorage.setItem('cart', JSON.stringify(this.cart()));
  }
}
