import { Component } from '@angular/core';
import { FeaturedItemComponent } from "../featured-item/featured-item.component";
import { FeaturedItem } from '../../types/featured-item.type';
import { CommonModule } from '@angular/common';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

const left = [
    query(':enter, :leave', style({ position: 'fixed'}), { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
        optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
        optional: true,
      }),
    ]),
  ];
  
  const right = [
    query(':enter, :leave', style({ position: 'fixed' }), { optional: true }),
    group([
      query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
        optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
        optional: true,
      }),
    ]),
  ];

@Component({
    selector: 'app-featured-list',
    standalone: true,
    templateUrl: './featured-list.component.html',
    styleUrl: './featured-list.component.scss',
    animations: [
        trigger('animSlider', [
            transition(':increment', right),
            transition(':decrement', left),
          ]),
    ],
    imports: [
        FeaturedItemComponent,
        CommonModule]
})
export class FeaturedListComponent {
    counter: number = 0;
    featuredItems: FeaturedItem[] = [
        {
            text: 'Amigurumi por apenas R$ 49,99',
            imgSrc: "/assets/png/bear.png"
        },
        {
            text: 'Aproveite as nossas promoções',
            imgSrc: "/assets/png/dragon.png"
        },
        {
            text: 'Novo amigurumi de gato a venda',
            imgSrc: "/assets/png/cat.png"
        }
    ]

    previousItem(){
        if(this.counter === 0){
            this.counter = this.featuredItems.length - 1
        }else{
            this.counter -= 1;
        }
    }

    nextItem(){
        if(this.counter === this.featuredItems.length - 1){
            this.counter = 0;
        } else{
            this.counter += 1;
        }
        
    }
}
