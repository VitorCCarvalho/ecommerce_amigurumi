import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FeaturedListComponent } from "../../components/featured-list/featured-list.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [HeaderComponent, FeaturedListComponent]
})
export class MainComponent {

}
