import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Marker } from '../marker';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html'
})
export class ListFormComponent {
  @Input() marker: Marker;

  constructor(
    private router: Router
  ){}
  
  onSubmit(){
    this.router.navigate(['list'])
  }
}
