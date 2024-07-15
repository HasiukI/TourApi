import { Component } from '@angular/core';
import { ApiService } from '../api.servise';
import { ActivatedRoute } from '@angular/router';
import { AllInfoForHotel } from '../Models/allInfoForHotel';
import { Review } from '../Models/review';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent {

  visibleimages:boolean=true;
  visibleReview:boolean=false;

  review:string="";

  info:AllInfoForHotel | undefined;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = params['id']; 
      
      this.api.getAllInfoForHotel(id).subscribe((info) => {
        this.info = info;
        console.log(info);
      });
    });

  }

  public changeVisible(ch:number){
    if(ch===0){
      this.visibleimages=true;
      this.visibleReview=false;
    }else{
      this.visibleimages=false;
      this.visibleReview=true;
    }
      
  }

  public BuyTour(){
    this.api.BuyTour(this.info?.hotel.id);
  }

  public SendReview(){
    this.info?.reviews.push(new Review(0,this.review,0));
    this.review="";
  }
}
