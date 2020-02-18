import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ContactModel } from '../../models/contact.model';
import { UserModel } from 'src/app/models/user.model';

import { ContactService } from '../../services/contactservice/contact.service';
import { UserService } from '../../services/userservice/user.service';

@Component({
  selector: 'contactdetails',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactdetailsComponent implements OnInit {

  contact: ContactModel;
  user: UserModel;
  userSubscriber: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    public ContactService: ContactService,
    private UserService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.ContactService.getContactById(id).subscribe((contact) => { this.contact = contact });
    })
    this.userSubscriber = this.UserService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.userSubscriber.unsubscribe();
  }

  deleteContact(id: string): void {
    this.ContactService.deleteContact(id);
    this.router.navigate(['contacts/']);
  }
}
