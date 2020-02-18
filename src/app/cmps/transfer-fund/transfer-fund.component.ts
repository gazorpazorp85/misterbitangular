import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ContactModel } from 'src/app/models/contact.model';
import { UserModel } from 'src/app/models/user.model';

import { UserService } from '../../services/userservice/user.service';

@Component({
  selector: 'transferfund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferfundComponent implements OnInit {

  amount: number;
  user: UserModel = this.UserService.getUser();
  // user$: this.UserService.getUser();

  @Input() contact: ContactModel;

  constructor(private UserService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onTransferCoins(): void {
    if (this.amount > this.user.coins) {
      console.log('you can\'t do it');
      return;
    } else {
      this.UserService.addMove(this.contact, this.amount);
    }
    this.router.navigate(['contacts/', this.contact._id])
  }
}
