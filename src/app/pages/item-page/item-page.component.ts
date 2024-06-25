import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Product } from '../../types/product.type';
import { ShopCartService } from '../../services/shop-cart/shop-cart.service';

@Component({
    selector: 'app-item-page',
    standalone: true,
    templateUrl: './item-page.component.html',
    styleUrl: './item-page.component.scss',
    imports: [HeaderComponent]
})
export class ItemPageComponent {

  constructor(private cartService: ShopCartService){}

  product: Product = {
    id: 0,
    name: 'Bear',
    price: 39.99,
    imgSrc: "/assets/png/bear.png",
    desc: "ADLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor risus, interdum sit amet lorem at, semper convallis justo. Vivamus pulvinar vehicula ex, sit amet lobortis risus. Etiam vitae sapien consectetur, commodo urna sit amet, placerat libero. Nulla facilisi. Pellentesque a aliquet ex, eu dapibus nisi. Proin vulputate dui ac pulvinar cursus. Nam fermentum tellus in mi placerat mattis. Phasellus leo lacus, vulputate sit amet condimentum id, viverra sed purus. Praesent bibendum nunc vitae ligula tempor, id lacinia ligula facilisis.Aliquam erat volutpat. Integer eu ipsum tempus, sollicitudin nibh non, efficitur velit. Ut luctus vestibulum leo, nec condimentum metus. In eleifend sit amet sem non eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc erat turpis, venenatis in velit ac, elementum faucibus diam. Proin at tincidunt massa. Donec laoreet neque sit amet eros pellentesque, ac semper nisl maximus. Nunc sem mi, consectetur elementum lacus sit amet, volutpat varius diam. Nam porta sed mauris sit amet sollicitudin. Sed mollis nulla non suscipit tempor. Nulla facilisi. Etiam bibendum, ligula ac finibus ultrices, erat erat vulputate est, a suscipit metus arcu in dolor. Aliquam erat volutpat. Fusce at nisl et eros commodo blandit. Sed sodales cursus est, a imperdiet nisl fringilla ut. Cras eros justo, bibendum sed hendrerit vel, semper dapibus nisi."
  }

  addToCart(){
    this.cartService.addItem(this.product)
  
  }
}
