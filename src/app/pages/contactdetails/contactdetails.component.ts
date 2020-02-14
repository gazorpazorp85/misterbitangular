import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ContactModel from '../../models/contact.model';
import { ContactService } from '../../services/contactservice/contact.service';
import { Location } from '@angular/common';


@Component({
  selector: 'contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.scss']
})
export class ContactdetailsComponent implements OnInit {

  contact: ContactModel;

  constructor(private route: ActivatedRoute,
    private location: Location,
    public ContactService: ContactService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.ContactService.getContactById(id).subscribe((contact) => { this.contact = contact });
    })
  }

  deleteContact(id: string): void {
    this.ContactService.deleteContact(id);
    this.location.back();
  }
}
