import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marker } from '../marker';
import { MockDataService } from '../mock-data-service.service';
@Component({
  selector: 'app-remove-marker',
  template: ``
})
export class RemoveMarkerComponent implements OnInit {
  markerList: Marker[] = this.mds.getData();
  constructor(private route: ActivatedRoute, private router: Router, private mds: MockDataService){

  }
  
  ngOnInit() {
    const markerId: string|null = this.route.snapshot.paramMap.get('id');
    if (markerId) {
      for (let index = 0; index < this.markerList.length; index++) {
        if (this.markerList[index].id == +markerId) {
          this.mds.deleteData(index);      
          this.router.navigate(['/list']);
          break;
        }    
      }
    }
  }
}
