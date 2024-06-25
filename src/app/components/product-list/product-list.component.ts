import { Component, Input } from '@angular/core';
import { Product } from '../../types/product.type';
import { ListItemComponent } from "../list-item/list-item.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss',
    imports: [
      CommonModule,
      ListItemComponent
      ]
})
export class ProductListComponent {
  @Input() sale : boolean = false
  products: Product[] = [
    {
      id: 0,
      name: "Urso",
      price: 49.91,
      imgSrc: "/assets/png/bear.png",
      desc: ""
    },
    {
      id: 0,
      name: "Urso",
      price: 49.92,
      imgSrc: "/assets/png/bear.png",
      desc: ""
    },
    {
      id: 0,
      name: "Urso",
      price: 49.93,
      imgSrc: "/assets/png/bear.png",
      desc: ""
    },
    {
      id: 0,
      name: "Urso",
      price: 49.94,
      imgSrc: "/assets/png/bear.png",
      desc: ""
    },
    {
      id: 0,
      name: "Urso",
      price: 49.95,
      imgSrc: "/assets/png/bear.png",
      desc: ""
    },
    {
      id: 0,
      name: "Urso",
      price: 49.96,
      imgSrc: "/assets/png/bear.png",
      desc: ""
    },
  ]


}
