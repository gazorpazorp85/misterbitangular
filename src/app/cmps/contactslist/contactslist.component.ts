import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import ContactModel from '../../models/contact.model';

@Component({
  selector: 'contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.scss']
})
export class ContactslistComponent {

  @Input() contacts: ContactModel[];

  constructor() { }
}