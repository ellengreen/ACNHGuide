import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'animalCrossing';

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.authService.getCurrentUser();
  }
}
