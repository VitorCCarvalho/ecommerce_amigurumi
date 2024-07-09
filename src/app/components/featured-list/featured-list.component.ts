import { Component } from '@angular/core';
import { FeaturedItemComponent } from "../featured-item/featured-item.component";
import { FeaturedItem } from '../../types/featured-item.type';
import { CommonModule } from '@angular/common';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
    selector: 'app-featured-list',
    standalone: true,
    templateUrl: './featured-list.component.html',
    styleUrl: './featured-list.component.scss',
    animations: [
          trigger(
            'inOutAnimation', 
            [
              transition(
                ':enter', 
                [
                  style({ opacity: 0}),
                  animate('0.5s ease-in', 
                          style({ opacity: 1 }))
                ]
              ),
              transition(
                ':leave', 
                [
                  style({ opacity: 1 }),
                  animate('0.5s ease-out', 
                          style({ opacity: 0 }))
                ]
              )
            ]
          )
    ],
    imports: [
        FeaturedItemComponent,
        CommonModule]
})
export class FeaturedListComponent {
    counter: number = 0;
    featuredItems: FeaturedItem[] = [
        {
            text: 'Amigurumis por apenas R$24,99',
            imgSrc: "/assets/png/seal.png",
            link: 'all-items'
        },
        {
            text: 'Aproveite as nossas promoções',
            imgSrc: "/assets/png/dragon.png",
            link: 'all-items'
        },
        {
            text: 'Novo amigurumi de gato a venda',
            imgSrc: "/assets/png/cat.png",
            link: 'item',
            queryParams: 'Cat'
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