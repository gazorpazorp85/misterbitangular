import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  // private _user: UserModel;
  // private _user$ = new BehaviorSubject<UserModel>(null);
  // public user$ = this._user$.asObservable;

  constructor(private UtilsService: UtilsService) { }

  public signup(name: string): void {
    var newUser = new UserModel();
    newUser.name = name;
    this.UtilsService.store(this.KEY, newUser);
    this.user = newUser;
  }

  public getUser(): UserModel {
    return this.user;
  }

  public addMove(contact: ContactModel, amount: number): void {
    var newMove = new MoveModel();
    newMove.toId = this.UtilsService.setId();
    newMove.to = contact.name;
    newMove.at = Date.now();
    newMove.amount = amount;
    this.user.coins -= amount;
    this.user.moves.unshift(newMove);
    this.UtilsService.store(this.KEY, this.user);
  }

  public isAuthenticated(): boolean {
    return (this.user) ? true : false;
  }

  // signup(name: string): void {
  //   let user = this.UtilsService.load(this.KEY);
  //   if (!user) {
  //     var newUser = new UserModel();
  //     newUser.name = name;
  //     this.UtilsService.store(this.KEY, newUser);
  //     this.user = newUser;
  //   }
  //   this._user$.next(this._user);
  // }

  // getUser() {
  //   return this.user$;
  // }

}
