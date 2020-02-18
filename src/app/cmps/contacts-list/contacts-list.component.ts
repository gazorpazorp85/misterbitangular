import { Component, Input } from '@angular/core';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'contactslist',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactslistComponent {

  @Input() contacts: ContactModel[];

  constructor() { }
}