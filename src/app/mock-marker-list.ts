import { Marker } from "./marker";

export var MARKERS: Marker[] = [
    {
        id: 1,
        position: new google.maps.LatLng({lat: 48.86041476088458, lng: 2.346346771389076}),
        lat: 48.86041476088458,
        lng: 2.346346771389076,
        title: "Paris",
        pays: "France",
        info: ", capitale de ",
        habitant: "2,161 millions"
    },
    {
        id: 2,
        position: new google.maps.LatLng({lat: 41.90129842650605,lng: 12.48998564895905}),
        lat: 41.90129842650605,
        lng: 12.48998564895905,
        title: "Rome",
        pays: "Italie",
        info: ", capitale de ",
        habitant: "2,873 millions"
    },
    {
        id: 3,
        position: new google.maps.LatLng({lat: 52.519451121174434, lng: 13.403399804177061} ),
        lat: 52.519451121174434,
        lng: 13.403399804177061,
        title: "Berlin",
        pays: "Allemagne",
        info: ", capitale de ",
        habitant: "3,645 millions"
    },
    {
        id: 4,
        position: new google.maps.LatLng({lat: 46.948026164196406, lng: 7.446777021340089}),
        lat: 46.948026164196406,
        lng: 7.446777021340089,
        title: "Berne",
        pays:"Suisse",
        info: ", capitale de ",
        habitant: "133 115"
    },
    {
        id: 5,
        position: new google.maps.LatLng({lat: 59.32991982904172, lng: 18.071311405166984}),
        lat: 59.32991982904172,
        lng: 18.071311405166984,
        title: "Stockholm",
        pays: "Suède",
        info: ", capitale de ",
        habitant: "975 551"
    }
];