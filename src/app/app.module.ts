import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ListMarkerComponent } from './list-marker/list-marker.component'
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map.component';  
import { FormsModule } from '@angular/forms';
import { ListFormComponent } from './list-form/list-form.component';
import { EditMarkerComponent } from './edit-marker/edit-marker.component';
import { RemoveMarkerComponent } from './remove-marker/remove-marker.component';
import { MockDataService } from './mock-data-service.service';
import { CreateMarkerComponent } from './create-marker/create-marker.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMarkerComponent,
    MapComponent,
    ListFormComponent,
    EditMarkerComponent,
    RemoveMarkerComponent,
    CreateMarkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GoogleMapsModule,
    AppRoutingModule
    
  ],
  providers: [MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
