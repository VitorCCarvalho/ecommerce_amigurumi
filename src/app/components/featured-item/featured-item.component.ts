import { Component, Input, OnInit } from '@angular/core';
import { FeaturedItem } from '../../types/featured-item.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-item',
  standalone: true,
  imports: [],
  templateUrl: './featured-item.component.html',
  styleUrl: './featured-item.component.scss'
})
export class FeaturedItemComponent{
  @Input() featuredItem: FeaturedItem = {
    text: "Amigurumis a partir de R$ 29,98",
    imgSrc: "/assets/png/bear.png",
    link: ''
  }

  constructor(private router: Router){}

  navigateToLink(){
    this.router.navigate([this.featuredItem.link])
  }

}