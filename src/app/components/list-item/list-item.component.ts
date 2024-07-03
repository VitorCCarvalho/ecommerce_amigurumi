import { Component, Input } from '@angular/core';
import { Product } from '../../types/product.type';
import { Router, RouterModule } from '@angular/router';

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
  constructor(private router: Router){}

  @Input() product: Product = {
    id: 0,
    name: "Urso",
    price: 49.99,
    imgSrc: "/assets/png/bear.png",
    desc: ""
  }

  navigateToItem(){
    this.router.navigate(['item'], {queryParams: {name: this.product.name}})
  }
}
