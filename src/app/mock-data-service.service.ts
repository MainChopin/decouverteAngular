import { Injectable } from '@angular/core';
import { MARKERS } from './mock-marker-list';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  public data = MARKERS;

  constructor(){
  }

  getData() {
    return this.data;
  }

  createData(newData: any) {
    this.data.push(newData);
  }

  deleteData(index: number) {
    this.data.splice(index, 1);
  }
}