import { Hotel } from "./hotel"
import { Review } from "./review";

export class AllInfoForHotel{
    hotel:Hotel;
    images:Array<Blob>;
    reviews:Array<Review>;

    constructor(hotel:Hotel,images:Array<Blob>,reviews:Array<Review>){
        this.hotel=hotel;
        this.images=images;
        this.reviews=reviews;
    }
}