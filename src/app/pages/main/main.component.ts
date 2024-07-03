import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FeaturedListComponent } from "../../components/featured-list/featured-list.component";
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CmsService } from '../../services/cms/cms.service';
import { Product } from '../../types/product.type';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [HeaderComponent, FeaturedListComponent, ProductListComponent, FooterComponent]
})
export class MainComponent implements OnInit{
    productResp!: any
    products!: Product[]
    productsSale!: Product[]
    constructor(
        private cmsService: CmsService
    ){}

    ngOnInit(): void {
        let productResp: any
        this.cmsService.getProducts().then((response) => {
            this.productResp = response

            this.products = (this.productResp.objects).map((item: any) => <Product> {
                name: item.metadata.name,
                desc: item.metadata.desc,
                price: item.metadata.price,
                imgSrc: item.metadata.imgsrc,
                sale: item.metadata.sale,
                salePrice: item.metadata.saleprice
            })

            this.productsSale = this.products.filter((item) => {
                return item.sale === true
            })
        })
       
    }
}
