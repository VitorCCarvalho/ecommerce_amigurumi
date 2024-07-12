import { Injectable, afterRender, signal } from '@angular/core';
import { CartItem } from '../../types/cart-item.type';
import { Product } from '../../types/product.type';
import { BehaviorSubject, Observable } from 'rxjs';

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

  storage!: Storage
  storageCart!: CartItem[]
  cart!: BehaviorSubject<CartItem[]>

  constructor() {
    if (typeof window !== "undefined") {
      this.storage = window.localStorage
      this.cart = new BehaviorSubject<CartItem[]>([])
      this.getCart()
    }
      
  }

  getCart(){
    console.log(this.storage.getItem('cart'))
    this.storageCart = this.storage.getItem('cart') === null ? [] : JSON.parse(this.storage.getItem('cart')  || "") 
    this.setCart(this.storageCart)
    
  }

  getItems(): Observable<CartItem[]>{
    return this.cart.asObservable()
  }

  setCart(cart: CartItem[]){
    this.cart.next(cart)
    this.syncCart()
  }

  addItem(item: Product){
    const shopCart = this.cart.value
    const existingItem = shopCart.find((i) =>
      i.product.name === item.name
    )

    if(existingItem){
      existingItem.qty += 1
    } else {
      let cartItem : CartItem = {
        product: item,
        qty: 1
      }
      shopCart.push(cartItem)
    }
    this.setCart(shopCart)
  }

  removeItem(productName: string){
    const shopCart = this.cart.value
    const item = shopCart.find((i) =>
      i.product.name === productName
    )

    if(item){
      if(item.qty > 1){
        item.qty -= 1
      } else{
        let index = shopCart.indexOf(item)
        shopCart.splice(index, 1)
      }
    }

    this.setCart(shopCart)
  }

  deleteItem(productId: number){
    const shopCart = this.cart.value
    const item = shopCart.find((i) =>
      i.product.id === productId
    )

    if(item){
      let index = shopCart.indexOf(item)
      shopCart.splice(index, 1)
    }

    this.setCart(shopCart)
  }
  

  syncCart(){
    this.storage.setItem('cart', JSON.stringify(this.cart.value))
  }
}
