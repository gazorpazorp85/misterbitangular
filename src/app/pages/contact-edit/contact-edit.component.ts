import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ContactModel } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contactservice/contact.service';

@Component({
  selector: 'contactedit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContacteditComponent implements OnInit {

  @ViewChild(NgForm, { static: true }) form: NgForm;
  contact: ContactModel;
  id: string = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    public ContactService: ContactService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      (this.id) ?
        this.ContactService.getContactById(this.id).subscribe((contact) => { this.contact = contact }) :
        this.contact = new ContactModel();
    })
  }

  editContact(): void {
    this.ContactService.saveContact(this.contact);
    this.router.navigate(['contacts/', this.contact._id]);
  }

  back(): void {
    (this.id) ? this.router.navigate(['contacts/', this.contact._id]) :
      this.router.navigate(['contacts/']);
  }
}
