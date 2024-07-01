import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FeaturedListComponent } from "../../components/featured-list/featured-list.component";
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CmsService } from '../../services/cms/cms.service';
import { IProductsEntity } from 'oneentry/dist/products/productsInterfaces';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [HeaderComponent, FeaturedListComponent, ProductListComponent, FooterComponent]
})
export class MainComponent implements OnInit{
    products!: IProductsEntity[]
    constructor(
        private cmsService: CmsService
    ){}

    ngOnInit(): void {
        this.cmsService.getAllProducts().then(result =>{
            this.products = result
            console.log(this.products)
        })
    }
}
