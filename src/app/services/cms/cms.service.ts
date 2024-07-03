import { Injectable } from '@angular/core';
import { createBucketClient } from '@cosmicjs/sdk';
import { Product } from '../../types/product.type';

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
      'metadata.saleprice' as 'salePrice'])

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
 
}
