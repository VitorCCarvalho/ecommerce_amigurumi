import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FeaturedListComponent } from "../../components/featured-list/featured-list.component";
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [HeaderComponent, FeaturedListComponent, ProductListComponent, FooterComponent]
})
export class MainComponent {

}
