import { environment } from '../environments/environment';

export const BASE_URL = environment.API_URL;

export const PRODUCTS_URL = BASE_URL + 'mplist/';
export const USER_URL = BASE_URL + 'users';
export const PACK_URL = BASE_URL + 'pack';
export const ONE_USER_URL = BASE_URL + 'user';
export const PACKS_URL = BASE_URL + 'packs';
export const ORDERS_URL = BASE_URL + 'orders';
export const UORDERS_URL = BASE_URL + 'uorders';
export const ORDER_URL = BASE_URL + 'order';
export const CHECKOUT_URL = BASE_URL + 'checkout/';

export const SINGLEPRODUCT_URL = BASE_URL + 'product';
export const ALLPRODUCTS_URL = BASE_URL + 'products';
export const ADDPRODUCT_URL = BASE_URL + 'product';
export const PRODUCTS_IMG_URL = './assets/img/ProductImages/';
export const FILE_URL = './assets/img/admin/avatar';
// export const IMG_URL = "./assets/img/";
// export const ADMIN_IMG_URL = "../../../assets/img/";

export const STATUS_NO_CONTENT = 204;
