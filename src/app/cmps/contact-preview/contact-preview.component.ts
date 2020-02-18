import { Component, Input } from '@angular/core';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'contactpreview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactpreviewComponent {

  @Input() contact: ContactModel;

  constructor() { }

}
