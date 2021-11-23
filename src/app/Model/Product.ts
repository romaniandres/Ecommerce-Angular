export class Product {
    id!: Number;
    name!: String;
    description!: String;
    price!: Number;
    img!: String;

    constructor(id: Number, name: String, description: String, price: Number, img: String) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.img = img;
    }
}