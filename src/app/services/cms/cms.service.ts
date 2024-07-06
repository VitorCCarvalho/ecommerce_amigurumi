import { Injectable } from '@angular/core';
import { createBucketClient } from '@cosmicjs/sdk';
import { Product } from '../../types/product.type';
import { GridFilter } from '../../types/grid-filter.type';

@Injectable({
  providedIn: 'root'
})
export class CmsService {
  cosmic = createBucketClient({
    bucketSlug: 'amigurumi-market-production',
    readKey: 'l8hffVUfBHt1lV8BU7DtEctwVujhgHYr4H9jDs5kdR0Vl2aW2R',
  });

  constructor() { }

  async getProducts(): Promise<Product[]>{
    let response: Promise<Product[]> = await this.cosmic.objects
    .find({
      type: 'products',
    })
    .props([ 
      'metadata.name' as 'name',
      'metadata.price' as 'price',
      'metadata.desc' as 'desc',
      'metadata.sale' as 'sale',
      'metadata.imgsrc' as 'imgSrc',
      'metadata.saleprice' as 'salePrice',
      'metadata.category' as 'category'])

    return response
  }

  async getProductByName(name: string): Promise<Product>{
    let response: Promise<Product> = await this.cosmic.objects
    .find({
      type: 'products',
      title: name
    })
    .props([ 
      'metadata.name' as 'name',
      'metadata.price' as 'price',
      'metadata.desc' as 'desc',
      'metadata.sale' as 'sale',
      'metadata.imgsrc' as 'imgSrc',
      'metadata.saleprice' as 'salePrice']).limit(1)

    return response
  }
 
  async getProductsFilter(gridValue: GridFilter){
    let categories = ['medium', 'big']
    let selectedCategories: any = []

    for(let i = 0; i < gridValue.category.length; i++){
      if(gridValue.category[i] === true){
        selectedCategories.push(categories[i])
      }
    }

    if(selectedCategories.length === 0){
      selectedCategories = ['medium', 'big']
    } 
    
    let arrayPrice = gridValue.priceRange.flatMap((b, i) => b ? i: [])
    let minPrice = Math.min.apply(Math, arrayPrice)
    let maxPrice = Math.max.apply(Math, arrayPrice)
    let minPriceQuery = 0
    let maxPriceQuery = 99999
    switch(minPrice){
      case 0:
        minPriceQuery = 0
        break;
      case 1:
        minPriceQuery = 26
        break;
      case 2:
        minPriceQuery = 51
        break;
    }

    switch(maxPrice){
      case 0:
        maxPriceQuery = 25
        break;
      case 1:
        maxPriceQuery = 50
        break;
      case 2:
        maxPriceQuery = 999999
        break;
    }

    let sale = gridValue.sale.flatMap((b, i) => b ? i: [])
    let saleBool: boolean[] = [false, true]
    if(sale.length > 0){
      saleBool = []
      sale.forEach((item) => saleBool.push(!!item))
    }
    
    

    let response: Promise<Product> = await this.cosmic.objects
    .find({
      type: 'products',
      'metadata.category': {
        $in: selectedCategories
      },
      'metadata.price': {
        $gte: minPriceQuery,
        $lte: maxPriceQuery
      },
      'metadata.sale': {
        $in: saleBool
      }
      
    })
    .props([ 
      'metadata.name' as 'name',
      'metadata.price' as 'price',
      'metadata.desc' as 'desc',
      'metadata.sale' as 'sale',
      'metadata.imgsrc' as 'imgSrc',
      'metadata.saleprice' as 'salePrice',
      'metadata.category' as 'category'])

    return response

  }
}
