import { Component } from '@angular/core';
import { ApiService } from '../api.servise';
import { Hotel } from '../Models/hotel';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  curentTours:Array<Hotel>| undefined;
  allfoods:Array<string> = new Array<string>;
  allTransport:Array<string> = new Array<string>;

  visibleCitys:boolean=false;
  visibleDate:boolean=false;


  selectedCountry: Array<any> | undefined;
  selectedCitys:Array<any>|undefined;
  selectedHotels:Array<any>|undefined;


  constructor(private api: ApiService) { 

    this.api.getAllTours().subscribe((tours) => {
      this.curentTours = tours.hotels;
      this.curentTours.forEach(tour=>{
        if(!this.allfoods.includes(tour.food)){
          this.allfoods.push(tour.food);
        }
        if(!this.allTransport.includes(tour.transport)){
          this.allTransport.push(tour.transport);
        }
      });
      this.selectedCountry = tours.countries;

    });
      
  }
  
  onSelectCountry(event:Event){
    const id = Number((event.target as HTMLSelectElement).value);
    this.api.getAllToursInCountry(id).subscribe((tours) => {
      this.curentTours = tours.hotels;
      this.selectedCitys = tours.cities;
      this.visibleCitys=true;
    });

  }

  onSelectCity(event:Event){
    const id = Number((event.target as HTMLSelectElement).value);
    this.api.getAllToursInCity(id).subscribe((hotels) => {
      this.selectedHotels =hotels;
      this.curentTours = hotels;
      this.visibleDate=true;
    });
  }
  onSelectFood(event:Event){
    const value = (event.target as HTMLSelectElement).value;
    this.curentTours=this.curentTours?.filter(t=>t.food===value);
  }
 
  onSelectTransport(event:Event){
    const value = (event.target as HTMLSelectElement).value;
    this.curentTours=this.curentTours?.filter(t=>t.transport===value);
  }

   
}
