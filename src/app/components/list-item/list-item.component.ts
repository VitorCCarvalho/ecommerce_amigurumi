import { Component, Input } from '@angular/core';
import { Product } from '../../types/product.type';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() sale: boolean = false
  @Input() newPrice: number = 0
  @Input() product: Product = {
    id: 0,
    name: "Urso",
    price: 49.99,
    imgSrc: "/assets/png/bear.png",
    desc: ""
  }
}
