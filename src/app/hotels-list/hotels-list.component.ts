import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels/hotels.service';
import { hotel } from '../models/hotels/hotel.model';

declare var $:any;

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  public hotels : hotel[];
  pipe : string = "hola mundo"

  constructor(private hotelService : HotelsService) { 
    
   }

  ngOnInit() {

    $(document).foundation();

    this.hotelService.getAllHotels().subscribe(data => {
      this.hotels = data;
    })
  }

}
