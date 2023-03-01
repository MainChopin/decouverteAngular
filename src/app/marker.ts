import { GoogleMapsModule } from "@angular/google-maps";

export class Marker{
    id: number;
    lat: number;
    lng: number;
    position: google.maps.LatLng;
    title: string;
    pays: string;
    info: string;
    habitant: string;

    constructor(
        lat: number = 0.0,
        lng: number = 0.0,
        title: string = "Mettre une ville ...",
        pays: string = "Mettre un pays ...",
        info: string = ", capital de ",
        habitant: string = "mettre le nombre d'habitants",   
    ){
        this.lat = lat,
        this.lng = lng,
        this.position = new google.maps.LatLng({lat: lat, lng: lng}),
        this.title = title,
        this.pays = pays,
        this.info = info,
        this.habitant = habitant;
    }
    
}