import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/outdated/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../user-auth.scss', './register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
