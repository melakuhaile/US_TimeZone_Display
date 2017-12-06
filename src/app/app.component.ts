import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Date();
  TimeZoneSelected = null;

  getDate(timezone) {
    this.time = new Date(); // creates current location date and time, eastern time.
    if (timezone === 'MST') {
      this.time.setHours(this.time.getHours() + 1); // adds an hour on current time
    } else if (timezone === 'CST') {
      this.time.setHours(this.time.getHours() + 2);
    } else if (timezone === 'EST') {
      this.time.setHours(this.time.getHours() + 3);
    }
    this.TimeZoneSelected = timezone;
  }

}