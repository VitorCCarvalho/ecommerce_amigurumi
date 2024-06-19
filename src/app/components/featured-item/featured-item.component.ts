import { Component, Input, OnInit } from '@angular/core';
import { FeaturedItem } from '../../types/featured-item.type';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
  selector: 'app-featured-item',
  standalone: true,
  imports: [],
  animations: [
    trigger('animSlider', [
      transition(':increment', right),
      transition(':decrement', left)
    ])
  ],
  templateUrl: './featured-item.component.html',
  styleUrl: './featured-item.component.scss'
})
export class FeaturedItemComponent{
  @Input() featuredItem: FeaturedItem = {
    text: "Amigurumis a partir de R$ 29,98",
    imgSrc: "/assets/png/bear.png"
  }

}
