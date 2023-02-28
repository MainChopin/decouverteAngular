import { Component} from '@angular/core';
import {Router } from '@angular/router';
import { Marker } from '../marker';
import { MockDataService } from '../mock-data-service.service';
import { MARKERS } from '../mock-marker-list';


@Component({
  selector: 'app-list-marker',
  templateUrl: './list-marker.component.html'
})
export class ListMarkerComponent {
  markerList: Marker[] = this.mds.getData();
  constructor(private router: Router, private mds: MockDataService){

  }
  
  goToEditMarker(marker: Marker){
    this.router.navigate(['/edit/list', marker.id])
  }

  goToRemoveMarker(marker: Marker){
    this.router.navigate(['/remove/list', marker.id])
  }
}
