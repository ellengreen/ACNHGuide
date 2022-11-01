import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/outdated/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../user-auth.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
