import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels/hotels.service';
import { hotel } from '../models/hotels/hotel.model';
import { SharedServiceService } from '../services/shared/shared-service.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  public hotels : hotel[] = [];
  //pipe : string = "hola mundo"

  nameHotel : string;

  constructor(
    private hotelService : HotelsService, 
    private sharedService: SharedServiceService
  
  ) { }

  ngOnInit() {

    let namedHotel : string = '';

    let filterO : hotel[] = []

    this.sharedService.getHotelsbyName().subscribe(data => {
      this.nameHotel = data;
      namedHotel = data;

      console.log(namedHotel)
      //this.hotels = (this.hotels.filter(hotel => hotel.name === (name)))
    });

    this.hotelService.getAllHotels().subscribe(data => {
      let filterO : hotel[] = []

      // filterO.map(hotel => {
      //   hotel.name.includes(namedHotel)
      // })

      this.hotels = data
    })
  }

}
