import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../services/shared/shared-service.service';

//declare var $:any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  nameHotel : string;

  

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit() {
  //  $(document).foundation();
  }

  onClickSearch() {
    this.sharedService.setHotelsbyName(this.nameHotel);
  }

}
