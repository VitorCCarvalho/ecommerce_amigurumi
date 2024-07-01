import { Injectable } from '@angular/core';
import { defineOneEntry } from 'oneentry';
import { IProductsEntity } from 'oneentry/dist/products/productsInterfaces';

let { Products } = defineOneEntry('https://vccarvalhoprojects.oneentry.cloud/api/content/products/all', {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidG9rZW4xIiwic2VyaWFsTnVtYmVyIjoxLCJpYXQiOjE3MTk1ODYwNzAsImV4cCI6MTc1MTEyMjA0M30.ceZA6PuYivNOtfX-la8M-BcEiU8PgScrlvAUA5a7TYQ', // AQUI SEU TOKEN
  langCode:'en_US', //en_US
})



@Injectable({
  providedIn: 'root'
})
export class CmsService {

  body = [
    {
      "attributeMarker": "price",
      "conditionMarker": "mth",
      "statusMarker": "waiting",
      "conditionValue": 1,
      "pageUrls": [
        "23-laminat-floorwood-maxima"
      ]
    },
    {
      "attributeMarker": "price",
      "conditionMarker": "lth",
      "conditionValue": 3,
      "pageUrls": [
        "23-laminat-floorwood-maxima"
      ]
    }
  ]

  
  constructor() { }

  async getAllProducts(): Promise<IProductsEntity[]> {
    try {
      const product = await Products.getProducts('en_US');
      return product;
    } catch (error) {
      console.error('Erro ao buscar todas as páginas:', error);
      return [];
    }
  }
 
}
