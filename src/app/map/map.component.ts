import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MockDataService } from '../mock-data-service.service';
import { MARKERS } from "../mock-marker-list";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit{
  title = 'angular-google-maps-app';
  constructor(private mockDataService: MockDataService){

  }
  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;
  pays!: MapInfoWindow;
  habitant!: MapInfoWindow;
  capital!: MapInfoWindow;

  zoom = 12;
  maxZoom = 15;
  minZoom = 3;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom:this.maxZoom,
    minZoom:this.minZoom,
  }
  
  markers = MARKERS as  any;
  infoContent = ''

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  openInfo(marker: MapMarker, content: string, habitant: string, pays: string, capital: string) {
    this.infoContent = capital + content + pays + " | " + habitant + " d'habitants";
    this.info.open(marker);
  
  }
}
