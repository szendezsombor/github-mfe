import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

const productsRootElement = document.querySelector('#dev-products');
const cartRootElement = document.querySelector('#cart-dev');

mountProducts(productsRootElement);
mountCart(cartRootElement);

console.log('Container');
