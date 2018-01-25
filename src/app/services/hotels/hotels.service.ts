import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment'

@Injectable()
export class HotelsService {

  constructor(private http: HttpClient) {
    
  }

  getAllHotels() : Observable<any> {
    return this.http.get(environment.geAllHotels).map((data: any) => data);
  }

}
