import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, ValidatorFn } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { Subscription } from 'rxjs';
import { Product } from '../../types/product.type';
import { CmsService } from '../../services/cms/cms.service';
import { GridItemComponent } from "../../components/grid-item/grid-item.component";
import { GridFilter } from '../../types/grid-filter.type';



@Component({
    selector: 'app-item-grid',
    standalone: true,
    templateUrl: './item-grid.component.html',
    styleUrl: './item-grid.component.scss',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HeaderComponent, 
        GridItemComponent]
})
export class ItemGridComponent implements OnInit{
  products!: Product[]
  productResp:any

  formFilters!: FormGroup

  categories = {
    'category1': "Standard",
    'category2': "Big"
  }

  priceRanges = {
    'priceRange1': 'Menos que R$25',
    'priceRange2':'Entre R$25 e R$50',
    'priceRange3': 'Mais que R$50'
  }

  sales = {
    'sale1': 'Não',
    'sale2': 'Sim'
  }

  selectedCategories: string[] = []
  selectedPriceRanges: string[] = []
  selectedSale: string[] = []

  categoriesSub!: Subscription
  priceRangesSub!: Subscription


  constructor(
    private formBuilder: FormBuilder,
    private cmsService: CmsService
  ){}

  ngOnInit(): void {
    this.createForm();

    this.initProducts();
    this.onChanges();
  }

  createForm(){
    this.formFilters = this.formBuilder.group({
      category: this.formBuilder.array(Object.keys(this.categories).map(key => false)),
      priceRange: this.formBuilder.array(Object.keys(this.priceRanges).map(key => false)),
      sale: this.formBuilder.array(Object.keys(this.sales).map(key => false))
    })
  }

  onChanges(){
    this.formFilters.valueChanges.subscribe((val) => {
      this.onSubmit();
    })
  }

  onSubmit(){

    let gridFilter: GridFilter ={
      category: this.formFilters.value.category,
      priceRange: this.formFilters.value.priceRange,
      sale: this.formFilters.value.sale
    }
    this.cmsService.getProductsFilter(gridFilter).then((response) => {
      this.productResp = response

      this.products = (this.productResp.objects).map((item: any) => <Product> {
          name: item.metadata.name,
          desc: item.metadata.desc,
          price: item.metadata.price,
          imgSrc: item.metadata.imgsrc,
          sale: item.metadata.sale,
          salePrice: item.metadata.saleprice
      })
    })
  }

  initProducts(){
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
        })
  }
}
