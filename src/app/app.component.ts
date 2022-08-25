import { Component } from '@angular/core';
import { LocalService } from './services/local/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskr';

  constructor(private localStore: LocalService) {

  }

}
