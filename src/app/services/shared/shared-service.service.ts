import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedServiceService {
  nameFilterExport: Subject<any> = new Subject<any>();

  constructor() { }

  getHotelsbyName() {
    return this.nameFilterExport;
  }

  setHotelsbyName(name: string) {
    return this.nameFilterExport.next(name);
  }

}
