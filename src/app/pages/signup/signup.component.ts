import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserModel from 'src/app/models/user.model';

import { UserService } from '../../services/userservice/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: UserModel;

  constructor(public UserService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.user = new UserModel();
  }

  signUp(): void {
    console.log(this.user);
    this.UserService.signup(this.user.name);
    this.router.navigate(['home']);
  }

}
