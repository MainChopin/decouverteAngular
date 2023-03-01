import { Injectable } from '@angular/core';
import { Marker } from './marker';
import { MARKERS } from './mock-marker-list';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private data = MARKERS;
  marker: Marker;

  constructor(){
  }

  getData() {
    return this.data;
  }

  createData(newData: Marker) { 
    console.log(newData);
    this.data.push(newData);
  }

  deleteData(index: number) {
    this.data.splice(index, 1);
  }
}