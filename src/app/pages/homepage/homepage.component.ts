import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/userservice/user.service';
import { BitcoinService } from '../../services/bitcoinservice/bitcoin.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  user: UserModel;
  isContactsShown: boolean;
  rate: number;

  constructor(private UserService: UserService, private BitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.user = this.UserService.getUser();
    this.BitcoinService.getBitCoinRate().subscribe((rate) => this.rate = +(1 / rate).toFixed(2));
  }
}