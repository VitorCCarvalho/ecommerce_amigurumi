import { Component, Input } from '@angular/core';
import { Product } from '../../types/product.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-item',
  standalone: true,
  imports: [],
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.scss'
})
export class GridItemComponent {

  constructor(private router: Router){}
  @Input() product!: Product

  navigateToItem(){
    this.router.navigate(['item'], {queryParams: {name: this.product.name}})
  }
}
