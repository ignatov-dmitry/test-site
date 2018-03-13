export class Category {
    constructor(
        public Id: number,
        public ParentId: number,
        public Name: string,
        public Alias: string,
        public MenuIndex: string
    ) { }
}
