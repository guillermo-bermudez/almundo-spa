import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels/hotels.service';
import { hotel } from '../models/hotels/hotel.model';



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

    

    this.hotelService.getAllHotels().subscribe(data => {
      this.hotels = data;
    })
  }

}
