import { Component, OnInit } from '@angular/core'
import { SharedServiceService } from '../../services/shared/shared-service.service'
import { Filter } from '../../models/filter/filter.model'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public filterH : Filter[] = []

  nameHotel : string
  allStars : boolean = true
  oneStars: boolean = true
  twoStars: boolean = true
  threeStars: boolean = true
  fourStars: boolean = true
  fiveStars: boolean = true

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit() {
    
  }

  onClickC() {
    if (this.allStars) this.fiveStars=this.fourStars=this.threeStars=this.twoStars=this.oneStars=true
    else this.fiveStars=this.fourStars=this.threeStars=this.twoStars=this.oneStars=false
  }

  onClickSearch() {

    this.filterH = []

    if (this.fiveStars && this.fourStars && this.threeStars && this.twoStars && this.oneStars)
      this.allStars = true
    else if (!this.fiveStars || !this.fourStars || !this.threeStars || !this.twoStars || !this.oneStars)
      this.allStars = false
    
    this.filterH.push({ nameH: this.nameHotel, starsH: [`${this.allStars},${this.fiveStars},${this.fourStars},${this.threeStars},${this.twoStars},${this.oneStars}`] })
    this.sharedService.setFilterObject(this.filterH);
  }

}
