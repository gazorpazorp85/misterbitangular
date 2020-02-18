import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { ContactModel } from 'src/app/models/contact.model';

@Component({
  selector: 'moveslist',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MoveslistComponent implements OnInit {

  isTransfersMade: boolean;
  lastTransfers: Array<any>;

  @Input() user: UserModel;
  @Input() contact: ContactModel;

  constructor() { }

  ngOnInit(): void {
    if (!this.contact) this.contact = new ContactModel();
    this.getLastTransfers(this.user);
    this.isTransfersMade = this.isMoveMade(this.user, this.contact);
  }

  ngOnChanges(): void {
    if (this.contact) {
      this.isTransfersMade = this.isMoveMade(this.user, this.contact);
    }
  }

  isMoveMade(user: UserModel, contact: ContactModel): boolean {
    if (user.moves.length === 0) {
      return true
    } else {
      return user.moves.every(move => move.to !== contact.name);
    };
  }

  getLastTransfers(user: UserModel): void {
    this.lastTransfers = [];
    let max = (user.moves.length <= 3) ? user.moves.length - 1 : 2;
    for (let i = 0; i <= max; i++) {
      this.lastTransfers.push(user.moves[i]);
    }
  }
} 
