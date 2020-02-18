import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from '../../services/userservice/user.service';
import { BitcoinService } from '../../services/bitcoinservice/bitcoin.service';

import { UserModel } from '../../models/user.model';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  user: UserModel;
  userSubscriber: Subscription;
  isContactsShown: boolean;
  rate: number;

  constructor(private UserService: UserService, private BitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.userSubscriber = this.UserService.user$.subscribe(user => this.user = user);
    this.BitcoinService.getBitCoinRate().subscribe((rate) => this.rate = +(1 / rate).toFixed(2));
  }

  ngOnDestroy() {
    this.userSubscriber.unsubscribe();
  }

}