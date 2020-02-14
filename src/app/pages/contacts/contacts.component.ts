import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contactservice/contact.service';
import ContactModel from '../../models/contact.model';
import FilterByModel from '../../models/filterBy.model';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: ContactModel[] = [];
  filterBy: FilterByModel = {term: ''};

  constructor(public ContactService: ContactService) { }

  onFilter(event): void {
    this.filterBy.term = event.target.value;
    this.ContactService.query(this.filterBy);
  }

  ngOnInit(): void {
    this.ContactService.query(this.filterBy);
    this.ContactService.contacts$.subscribe((contacts) => this.contacts = contacts);
  }

}
