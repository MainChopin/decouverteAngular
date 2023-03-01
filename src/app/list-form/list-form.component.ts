import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marker } from '../marker';
import { MockDataService } from '../mock-data-service.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html'
})
export class ListFormComponent implements OnInit {
  @Input() marker: Marker;
  isNewForm: boolean;
  markerList: Marker[] = this.mds.getData();

  constructor(
    private router: Router,
    private mds: MockDataService
    ){}
    
  ngOnInit(){
    this.isNewForm = this.router.url.includes('new');
  }

  onSubmit(){
    if (this.isNewForm) {
      this.marker.id = this.markerList[this.markerList.length].id + 2;
      this.marker.position = new google.maps.LatLng({lat: this.marker.lat, lng: this.marker.lng});
      this.mds.createData(this.marker);
      this.router.navigate(['list']);
    }else{
      this.marker.position = new google.maps.LatLng({lat: this.marker.lat, lng: this.marker.lng});
      this.router.navigate(['list']);
    } 
  }
}
