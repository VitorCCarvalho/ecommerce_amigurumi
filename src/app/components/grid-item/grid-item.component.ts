import { Component, Input } from '@angular/core';
import { Product } from '../../types/product.type';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-grid-item',
  standalone: true,
  imports: [],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('0.7s linear', 
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('0.7s linear', 
                    style({ opacity: 0 }))
          ]
        )
      ]
    )
  ],
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
