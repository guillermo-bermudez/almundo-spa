import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Filter } from '../../models/filter/filter.model'

@Injectable()
export class SharedServiceService {
  
  filterExport: Subject<any> = new Subject<any>();

  constructor() { }

  // getHotelsbyName() {
  //   return this.nameFilterExport;
  // }

  getFilterObject() {
    return this.filterExport;
  }

  setFilterObject(filterObject: Filter[]) {
    return this.filterExport.next(filterObject);
  }

}
