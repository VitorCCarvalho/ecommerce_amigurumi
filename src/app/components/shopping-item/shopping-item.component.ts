import { Component, Input } from '@angular/core';
import { Product } from '../../types/product.type';

@Component({
  selector: 'app-shopping-item',
  standalone: true,
  imports: [],
  templateUrl: './shopping-item.component.html',
  styleUrl: './shopping-item.component.scss'
})
export class ShoppingItemComponent {
  @Input() product: Product ={
    id: 0,
    name: 'Bear',
    price: 39.99,
    imgSrc: "/assets/png/bear.png",
    desc: ""
  }
}
