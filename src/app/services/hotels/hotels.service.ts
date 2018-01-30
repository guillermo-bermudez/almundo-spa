import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment'
import { Filter } from '../../models/filter/filter.model'

@Injectable()
export class HotelsService {

  constructor(private http: HttpClient) {
    
  }

  getAllHotels() : Observable<any> {
    return this.http.get(environment.getAllHotels).map((data: any) => data);
  }

  // TODO: filter with entire params :D
  // getAllHotelsWithFilters(filter: Filter) : Observable<any> {
  //   return this.http.get(environment.getAllHotels).map((data: any) => data);
  // }

}
