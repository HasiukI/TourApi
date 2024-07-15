import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hotel } from './Models/hotel';
import { HotelCountry } from './Models/hotelCountry';
import { HotelCity } from './Models/hotelCity';
import { AllInfoForHotel } from './Models/allInfoForHotel';

@Injectable({
  providedIn: 'root' // це гарантує, що сервіс буде доступний у всьому додатку
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:5259/api/';
 // private apiUrl = 'http://127.0.0.1:8000/api/';

  public getAllTours(): Observable<HotelCountry> {
    return this.http.get(this.apiUrl + "Tour").pipe(
      map(results => results as HotelCountry)
    );
  }

  public getAllToursInCountry(id:number){
    return this.http.get(this.apiUrl + "Tour/country/"+id).pipe(
      map(results => results as HotelCity)
    );
  }

  public getAllToursInCity(id:number){
    return this.http.get(this.apiUrl + "Tour/city/"+id).pipe(
      map(results => results as Array<Hotel>)
    );
  }

  public getAllInfoForHotel(id:number){
    return this.http.get(this.apiUrl + "Tour/hotel/"+id).pipe(
      map(results => results as AllInfoForHotel)
    );
  }

  public getPopularInCountry(id:number){
    return this.http.get(this.apiUrl + "Tour/popular/"+id).pipe(
      map(results => results as Array<Hotel>)
    );
  }

  public BuyTour(id?:number){
    this.http.get(this.apiUrl + "Tour/"+id).subscribe();
  }
}
