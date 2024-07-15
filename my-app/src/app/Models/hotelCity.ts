import { Hotel } from "./hotel";
import { City} from "./city";

export class HotelCity{
    cities:Array<City>;
    hotels:Array<Hotel>;

     constructor(cities:Array<City>,hotels:Array<Hotel>){
        this.cities =cities;
        this.hotels=hotels;
     }
}