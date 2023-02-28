import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marker } from '../marker';
import { MockDataService } from '../mock-data-service.service';

@Component({
  selector: 'app-edit-marker',
  template: `
    <app-list-form *ngIf="marker" [marker]="marker"></app-list-form>
    `
})
export class EditMarkerComponent implements OnInit {
  
  markerList: Marker[] = this.mds.getData();
  marker: Marker|undefined;
  constructor( private route: ActivatedRoute,private mds: MockDataService){
   
  }

  ngOnInit(): void {
    const markerId: string|null = this.route.snapshot.paramMap.get('id');
    if (markerId) {
      this.marker = this.markerList.find(marker => marker.id == +markerId)
    }else{
      this.marker = undefined;
    }
  }
}
