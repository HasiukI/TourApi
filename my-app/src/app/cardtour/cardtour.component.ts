import { Component,Input } from '@angular/core';
import { Hotel } from '../Models/hotel';


@Component({
  selector: 'app-cardtour',
  templateUrl: './cardtour.component.html',
  styleUrls: ['./cardtour.component.css']
})
export class CardtourComponent {
  @Input() hotel:Hotel | undefined;
  
  constructor(){  
  }
  
}
