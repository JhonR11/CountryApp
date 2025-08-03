import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './Not-found.component.html',
})
export class NotFoundComponent { 
  location = inject(Location);


  goBack(){
    this.location.back()
    
  }
}
