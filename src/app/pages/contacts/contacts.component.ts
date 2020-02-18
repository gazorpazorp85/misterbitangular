import { Component, OnInit } from '@angular/core';

import ContactModel from '../../models/contact.model';
import FilterByModel from '../../models/filterBy.model';

import { ContactService } from '../../services/contactservice/contact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {

  contacts$: Observable<ContactModel[]>;
  filterBy: FilterByModel = { term: '' };

  constructor(public ContactService: ContactService) { }

  onFilter(event): void {
    this.filterBy.term = event.target.value;
    this.ContactService.query(this.filterBy);
  }

  ngOnInit(): void {
    this.ContactService.query(this.filterBy);
    this.contacts$ = this.ContactService.contacts$;
  }
}
