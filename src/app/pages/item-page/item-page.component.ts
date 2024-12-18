import { SnackbarService } from './../../services/snackbar/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Product } from '../../types/product.type';
import { ShopCartService } from '../../services/shop-cart/shop-cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CmsService } from '../../services/cms/cms.service';
import { ProductImage } from '../../types/product-image.type';

@Component({
    selector: 'app-item-page',
    standalone: true,
    templateUrl: './item-page.component.html',
    styleUrl: './item-page.component.scss',
    imports: [HeaderComponent]
})
export class ItemPageComponent implements OnInit{

  constructor(
    private cartService: ShopCartService,
    private snackbarService: SnackbarService,
    private router: Router,
    private cmsService: CmsService,
    private activeRoute: ActivatedRoute){}

  ngOnInit(){
    let name = ""
    let productResp: any
    this.activeRoute.queryParams.subscribe((nameParam) => {
      name = nameParam['name']
      if(name != null){
        this.cmsService.getProductByName(name).then((response: any) => {
          productResp = response.objects[0].metadata
  
          this.product.name = productResp.name
          this.product.desc = productResp.desc
          this.product.price = productResp.price
          this.product.imgSrc = productResp.imgsrc
          this.product.sale = productResp.sale
          this.product.salePrice = productResp.saleprice
  
      }).finally(() => {
        this.cmsService.getProductImages(this.product.name.toLowerCase()).then((response: any) => {
          this.productImages = response.media
        })
      })
    }
    
    })
    
    
  }
    
  

  product: Product = {
    id: 0,
    name: 'Bear',
    price: 39.99,
    imgSrc: "/assets/png/bear.png",
    desc: "ADLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor risus, interdum sit amet lorem at, semper convallis justo. Vivamus pulvinar vehicula ex, sit amet lobortis risus. Etiam vitae sapien consectetur, commodo urna sit amet, placerat libero. Nulla facilisi. Pellentesque a aliquet ex, eu dapibus nisi. Proin vulputate dui ac pulvinar cursus. Nam fermentum tellus in mi placerat mattis. Phasellus leo lacus, vulputate sit amet condimentum id, viverra sed purus. Praesent bibendum nunc vitae ligula tempor, id lacinia ligula facilisis.Aliquam erat volutpat. Integer eu ipsum tempus, sollicitudin nibh non, efficitur velit. Ut luctus vestibulum leo, nec condimentum metus. In eleifend sit amet sem non eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc erat turpis, venenatis in velit ac, elementum faucibus diam. Proin at tincidunt massa. Donec laoreet neque sit amet eros pellentesque, ac semper nisl maximus. Nunc sem mi, consectetur elementum lacus sit amet, volutpat varius diam. Nam porta sed mauris sit amet sollicitudin. Sed mollis nulla non suscipit tempor. Nulla facilisi. Etiam bibendum, ligula ac finibus ultrices, erat erat vulputate est, a suscipit metus arcu in dolor. Aliquam erat volutpat. Fusce at nisl et eros commodo blandit. Sed sodales cursus est, a imperdiet nisl fringilla ut. Cras eros justo, bibendum sed hendrerit vel, semper dapibus nisi."
  }

  productImages: ProductImage[] = []

  buyNow(){
    this.cartService.addItem(this.product)
    this.router.navigate(['/cart'])
  }

  addToCart(){
    this.cartService.addItem(this.product)
    this.notifyAddToCart();
  }

  notifyAddToCart(){
    this.snackbarService.open("Item adicionado ao carrinho");
  }
}
