import { Component } from '@angular/core';
import { ApiService } from '../api.servise';
import { Hotel } from '../Models/hotel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  popularUkraine:Array<Hotel> |undefined;
  popularUSA:Array<Hotel> |undefined;

  constructor(private api:ApiService){
    this.api.getPopularInCountry(0).subscribe((popular) => {
      this.popularUkraine=popular;
      console.log(this.popularUkraine);
    });
    this.api.getPopularInCountry(1).subscribe((popular) => {
      this.popularUSA=popular;
    });
  }
}
