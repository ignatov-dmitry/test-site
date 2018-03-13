import { UploadFile } from './UploadFile';

export class Product {
    constructor(
        public Id: number,
        public Name: string,
        public Alias: string,
        public Description: string,
        public Price: number,
        public Count: number,
        public Image: string,
        public Files: Array<UploadFile>,
        public CategoryId: string
    ) { }
}
