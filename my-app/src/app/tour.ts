import { Country } from "./Models/country"
import { City } from "./Models/city";
import { Hotel } from "./Models/hotel";

export class Tour{

    curentTours:Hotel[] | undefined;

    curentCountry:Country| undefined;
    curentCitys:Country| undefined;
    curentHotels:Country| undefined;

    countries:Country[]=[
        new Country(0,"Ukraine"),
        new Country(1,"USA"),
        new Country(2,"Poland")
    ];


    citys:City[]=[
        new City(0,"Ternopil",0),
        new City(1,"Kyiv",0),
        new City(2,"Zbaraj",0),

        new City(3,"Washitgton",1),
        new City(4,"Colorado",1),

        new City(5,"Lublun",2),
        new City(6,"Warshava",2),
        new City(7,"Vroclav",2),
    ];

    hotels:Hotel[]=[
        new Hotel(0,"Hotel 1 in Ternopil",0),
        new Hotel(1,"Hotel 2 in Ternopil",0),

        new Hotel(2,"Hotel 1 in Kyiv",1),
        new Hotel(3,"Hotel 2 in Kyiv",1),
        new Hotel(4,"Hotel 3 in Kyiv",1),
        new Hotel(5,"Hotel 4 in Kyiv",1),

        new Hotel(6,"Hotel 1 in Zbaraj",2),

        new Hotel(7,"Hotel 1 in Washitgton",3),
        new Hotel(8,"Hotel 2 in Washitgton",3),
        new Hotel(9,"Hotel 3 in Washitgton",3),

        new Hotel(10,"Hotel 1 in Colorado",4),
        new Hotel(11,"Hotel 2 in Colorado",4),

        new Hotel(12,"Hotel 1 in Lublun",5),

        new Hotel(12,"Hotel 1 in Warshava",6),
        new Hotel(13,"Hotel 2 in Warshava",6),
        new Hotel(14,"Hotel 3 in Warshava",6),
        new Hotel(15,"Hotel 4 in Warshava",6),

        new Hotel(16,"Hotel 1 in Vroclav",7),
        new Hotel(17,"Hotel 2 in Vroclav",7),
    ];

    constructor(){
        this.curentTours = this.hotels;
    }

    getCitysByCountry(countryId:number) : Array<City>{
        this.curentCountry = this.countries.find(country => country.id === countryId);
        
        const cityIds = this.citys.filter(city => city.countryId === countryId).map(city => city.id); 
        this.curentTours = this.hotels.filter(hotel => cityIds.includes(hotel.cityId));

        return  this.citys.filter(city => city.countryId === countryId);

    }

    getHotelsByCity(cityId:number): Array<Hotel>{
        this.curentCitys = this.countries.find(city => city.id === cityId);

        this.curentTours = this.hotels.filter(h=>h.cityId === cityId);
        return this.hotels.filter(h => h.cityId === cityId);
    }
}