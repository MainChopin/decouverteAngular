import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marker } from '../marker';
import { MockDataService } from '../mock-data-service.service';
import { MARKERS } from '../mock-marker-list';
@Component({
  selector: 'app-remove-marker',
  template: ``
})
export class RemoveMarkerComponent implements OnInit {
  markerList: Marker[] = this.mds.getData();
  marker: Marker|undefined;
  constructor(private route: ActivatedRoute, private router: Router, private mds: MockDataService){

  }
  
  ngOnInit() {
    const markerId: string|null = this.route.snapshot.paramMap.get('id');
    if (markerId) {
      this.markerList.find(marker => marker.id == +markerId)
      for (let index = 0; index < this.markerList.length; index++) {
        if (this.markerList[index].id = +markerId) {
          this.markerList.splice(index,1);
          this.router.navigate(['/list']);
          break;
        }    
      }
    }
  }
}
