import { CartLine } from './CartLine';

export class OtherBuyer {
    constructor(
        public Id?: number,
        public Surname?: string,
        public Name?: string,
        public MiddleName?: string,
        public Address?: string,
        public Phone?: string,
        public CartLines?: Array<CartLine>
    ) { }
}
