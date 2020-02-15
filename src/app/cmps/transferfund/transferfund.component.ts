import { Component, OnInit, Input } from '@angular/core';

import ContactModel from 'src/app/models/contact.model';
import UserModel from 'src/app/models/user.model';

import { UserService } from '../../services/userservice/user.service';

@Component({
  selector: 'transferfund',
  templateUrl: './transferfund.component.html',
  styleUrls: ['./transferfund.component.scss']
})
export class TransferfundComponent implements OnInit {

  amount: number;
  user: UserModel = this.UserService.getUser();

  @Input() contact: ContactModel;

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
  }

  addMove(): void {
    if (this.amount > this.user.coins) {
      console.log('you can\'t do it');
      return;
    } else {
      this.UserService.addMove(this.contact, this.amount);
    }
  }
}
