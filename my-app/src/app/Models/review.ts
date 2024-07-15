export class Review{
    id:number;
    title:string;
    hotelId:number;
    

    constructor( id:number, title:string, hotelId:number){
        this.id=id;
        this.title=title;
        this.hotelId=hotelId;
    }
}