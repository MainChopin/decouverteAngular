import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMarkerComponent } from './create-marker/create-marker.component';
import { EditMarkerComponent } from './edit-marker/edit-marker.component';
import { ListMarkerComponent } from './list-marker/list-marker.component';
import { MapComponent } from './map/map.component';
import { RemoveMarkerComponent } from './remove-marker/remove-marker.component';

const routes: Routes = [
  {path: 'edit/list/:id', component: EditMarkerComponent},
  {path: 'remove/list/:id', component: RemoveMarkerComponent},
  {path: 'create', component: CreateMarkerComponent},
  { path: 'list' , component: ListMarkerComponent},
  { path: 'map', component: MapComponent},
  { path: '', redirectTo:'map',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
