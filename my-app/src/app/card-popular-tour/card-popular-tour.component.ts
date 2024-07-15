import { Component, Input } from '@angular/core';
import { Hotel } from '../Models/hotel';

@Component({
  selector: 'app-card-popular-tour',
  templateUrl: './card-popular-tour.component.html',
  styleUrls: ['./card-popular-tour.component.css']
})
export class CardPopularTourComponent {
 @Input() hotel:Hotel | undefined;

 constructor(){}
}
