import { Component, OnInit } from '@angular/core';
import { Marker } from '../marker';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../mock-data-service.service';
@Component({
  selector: 'app-create-marker',
  template: '<app-list-form [marker]="marker"></app-list-form>'
})
export class CreateMarkerComponent implements OnInit {
  markerList: Marker[] = this.mds.getData();
  marker: Marker;

  constructor( private route: ActivatedRoute,private mds: MockDataService){
   
  }
  ngOnInit(){
    this.marker = new Marker();
    this.marker.id = this.markerList[this.markerList.length-1].id + 1;
  }
  
}
