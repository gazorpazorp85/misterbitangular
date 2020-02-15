import { Injectable } from '@angular/core';

import UserModel from '../../models/user.model';
import ContactModel from 'src/app/models/contact.model';
import MoveModel from 'src/app/models/move.model';

import { UtilsService } from '../utilsservice/utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  KEY = 'user';
  user = this.UtilsService.load(this.KEY);

  constructor(private UtilsService: UtilsService) { }

  signup(name: string): void {
    var newUser = new UserModel();
    newUser.name = name;
    this.UtilsService.store(this.KEY, newUser);
    this.user = newUser;
  }

  getUser(): UserModel {
    return this.user;
  }

  addMove(contact: ContactModel, amount: number): void {
    var newMove = new MoveModel();
    newMove.toId = this.UtilsService.setId();
    newMove.to = contact.name;
    newMove.at = Date.now();
    newMove.amount = amount;
    this.user.coins -= amount;
    this.user.moves.unshift(newMove); 
    this.UtilsService.store(this.KEY, this.user);
    console.log(newMove);
    console.log(this.user);
  }
}
