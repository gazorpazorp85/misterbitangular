import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../userservice/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate {

  constructor(public auth: UserService, private router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['signup']);
      return false;
    } else {
      return true;
    }
  }
}


