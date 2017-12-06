import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches = [true, false, true, false, false, true, true, true, false, true];
  change(toggle) {
    this.switches[toggle] = !this.switches[toggle];
  }

}