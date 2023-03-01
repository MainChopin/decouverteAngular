import { Component, OnInit } from '@angular/core';
import { Marker } from '../marker';

@Component({
  selector: 'app-create-marker',
  template: '<app-list-form [marker]="marker"></app-list-form>'
})
export class CreateMarkerComponent implements OnInit {

  marker: Marker;

  ngOnInit(){
    this.marker = new Marker();
  }
}
