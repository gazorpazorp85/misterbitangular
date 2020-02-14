import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ContactModel from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contactservice/contact.service';
import { Location } from '@angular/common';

@Component({
  selector: 'contactedit',
  templateUrl: './contactedit.component.html',
  styleUrls: ['./contactedit.component.scss']
})
export class ContacteditComponent implements OnInit {

  contact: ContactModel;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    public ContactService: ContactService) { }

  ngOnInit(): void {
    console.log('edit init');
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      (id) ?
        this.ContactService.getContactById(id).subscribe((contact) => { this.contact = contact }) :
        this.contact = new ContactModel();
    })
  }

  editContact(): void {
    this.ContactService.saveContact(this.contact);
    this.router.navigate(['contacts/', this.contact._id]);
  }

  back(): void {
    this.location.back();
  }
}
