import { Hotel } from "./hotel";
import { Country } from "./country";

export class HotelCountry{
    countries:Array<Country>;
    hotels:Array<Hotel>;

     constructor(countries:Array<Country>,hotels:Array<Hotel>){
        this.countries =countries;
        this.hotels=hotels;
     }
}