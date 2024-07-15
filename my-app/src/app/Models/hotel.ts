export class Hotel{
    id:number;
    name:string;
    cityId:number;
    description: string;
    image:Blob;
    transport:string;
    price:number;
    isActive:boolean;
    food:string;
    raiting:number;

    constructor(id:number, name:string,cityId:number,image:Blob, transport:string, price:number,isActive:boolean,food:string,description: string, raiting:number){
        this.id=id;
        this.name=name;
        this.cityId=cityId;
        this.image = image;
        this.transport = transport;
        this.price = price;
        this.isActive = isActive;
        this.food = food;
        this.description = description;
        this.raiting = raiting;
    }
}