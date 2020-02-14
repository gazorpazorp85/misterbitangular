import { Injectable } from '@angular/core';
import UserModel from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = {name:"Charlie Brown", coins: 100}

  constructor() { }

  getUser(): UserModel {
    return this.user;
  }
}
