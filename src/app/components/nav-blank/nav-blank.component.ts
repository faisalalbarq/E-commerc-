import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/shared/services/auth.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent {


  constructor(private _AuthService: AuthService) { }

  logOutUser(): void {
    this._AuthService.logOut();
  }
}
