export class Product {
    name!: String;
    description!: String;
    price!: Number;

    constructor(name: String, description: String, price: Number) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
}