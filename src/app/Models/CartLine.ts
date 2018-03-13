import { Product } from './Product';

export class CartLine {
    constructor(
        public ProductId?: number,
        public product?: Product,
        public count?: number
    ) { }
}
