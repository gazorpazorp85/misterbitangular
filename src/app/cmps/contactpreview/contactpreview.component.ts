import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import ContactModel from '../../models/contact.model';

@Component({
  selector: 'contactpreview',
  templateUrl: './contactpreview.component.html',
  styleUrls: ['./contactpreview.component.scss']
})
export class ContactpreviewComponent {

  @Input() contact: ContactModel;

  constructor() { }

}
