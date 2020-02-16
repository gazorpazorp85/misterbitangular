import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import ContactModel from '../../models/contact.model';
import FilterByModel from '../../models/filterBy.model';
import UserModel from 'src/app/models/user.model';

import { ContactService } from '../../services/contactservice/contact.service';
import { UserService } from '../../services/userservice/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<ContactModel[]>;
  user: UserModel = this.UserService.getUser();
  filterBy: FilterByModel = { term: '' };

  constructor(public ContactService: ContactService,
              private UserService: UserService,
              private router: Router) { }

  onFilter(event): void {
    this.filterBy.term = event.target.value;
    this.ContactService.query(this.filterBy);
  }

  ngOnInit(): void {
    if (!this.user) this.router.navigate(['signup']);
    this.ContactService.query(this.filterBy);
    this.contacts$ = this.ContactService.contacts$;
  }
}
