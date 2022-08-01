import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h2>{{ getTitle() }}</h2>',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  getTitle(){
    return ("Luggage baggage")
  }
}
