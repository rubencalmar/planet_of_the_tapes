import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { PRODUCTS_URL, SINGLEPRODUCT_URL, ALLPRODUCTS_URL, ADDPRODUCT_URL, CHECKOUT_URL, UORDERS_URL, ORDERS_URL, ORDER_URL } from '../util';
import {BASE_URL} from '../util';
import { Product } from '../model/product.model';

import {Pack} from '../model/pack.model';
import {POrder} from '../model/pOrder.model';
import { ProductService } from './product.service';

export interface Product {
  id: number;
  name: string;
  description: string;
  type: string;
  genre: string;
  stock: number;
  pbuy: number;
  prent: number;
  score: number;
  trailer: string;
  director: string;
  cast: string;
  year: number;
  urlimg?: any;
  hasPhoto?: boolean;
  packs?: Pack[];
  orders?: POrder[];
}

export interface POrder {
    id?: number;
    state: string;
    pay: string;
    type: string;
    total: number;
    products?: Product[];
    packs?: Pack[];
  }
  export interface User {
    id?: number;
    name: string;
    passwordHash?: string;
    dni: string;
    email: string;
    telephone: string;
    viewTelephone?: boolean;
    address?: string;
    roles?: string[];
    hasPhoto?: boolean;
    orders?: POrder[];
    avatar?: string;
  }

@Injectable()
export class OrderService {

    service: ProductService;
    constructor(private http: Http) {}

    getOrders() {
      return this.http.get(ORDERS_URL, { withCredentials: true })
        .map(response => response.json())
        .catch(error => this.handleError(error));
    }

  getUOrders() {
    return this.http.get(UORDERS_URL, { withCredentials: true })
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  createOrder(id: number){

    let newOrder: POrder;
    const body = JSON.stringify(newOrder);
    const headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });

    const options = new RequestOptions({ withCredentials: true, headers });
      return this.http.post(ORDER_URL + '/' + id, body, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
    }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw('Server error (' + error.status + '): ' + error.text());
  }
  checkOut(id: number) {
    return this.http.put(CHECKOUT_URL + id, { withCredentials: true })
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
}
