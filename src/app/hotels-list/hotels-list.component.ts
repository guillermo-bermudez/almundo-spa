import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels/hotels.service';
import { Hotel } from '../models/hotels/hotel.model';
import { Filter } from '../models/filter/filter.model';
import { SharedServiceService } from '../services/shared/shared-service.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  public hotels : Hotel[] = [];
  public filters : Filter[] = [];

  public result : Hotel[] = [];

  //hotelsByFilter

  nameHotel : string;

  constructor(
    private hotelService : HotelsService, 
    private sharedService: SharedServiceService
  
  ) { }

  ngOnInit() {

    let namedHotel : string = '';

    this.sharedService.getFilterObject().subscribe((filter: Filter[]) => {
      let f = filter

      let arr = this.result.filter(hotel => {
        let regex = new RegExp(f[0].nameH, 'gi')
        if (f[0].nameH === '')
          return true;
        return hotel.name.match(regex) 
      });
      
      if (f[0].starsH[0].split(',')[0] === 'false') {
        const five = f[0].starsH[0].split(',')[1] === 'true' ? true : false
        const four = f[0].starsH[0].split(',')[2] === 'true' ? true : false
        const three = f[0].starsH[0].split(',')[3] === 'true' ? true : false
        const two = f[0].starsH[0].split(',')[4] === 'true' ? true : false
        const one = f[0].starsH[0].split(',')[5] === 'true' ? true : false

        arr = arr.filter(hotel => {
          return hotel.stars == (five ? 5 : undefined) || hotel.stars == (four ? 4 : undefined) ||
           hotel.stars == (three ? 3 : undefined) || hotel.stars == (two ? 2 : undefined) ||
           hotel.stars == (one ? 1 : undefined)
        })
      }

      this.hotels = arr
      
    })

    this.hotelService.getAllHotels().subscribe(data => {
      this.result = data
      this.hotels = data
    })
  }

}
