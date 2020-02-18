import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';

import { ContactModel } from '../../models/contact.model';
import { FilterByModel } from '../../models/filterBy.model';

import { UtilsService } from '../utilsservice/utils.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  KEY = 'contacts';
  CONTACTS = this.UtilsService.load(this.KEY) || [new ContactModel('5a56640269f443a5d64b32ca', 'Ochoa Hyde', 'ochoahyde@renovize.com', '+1 (968) 593-3824'),
  new ContactModel('5a5664025f6ae9aa24a99fde', 'Hallie Mclean', 'halliemclean@renovize.com', '+1 (948) 464-2888'),
  new ContactModel('5a56640252d6acddd183d319', 'Parsons Norris', 'parsonsnorris@renovize.com', '+1 (958) 502-3495'),
  new ContactModel('5a566402ed1cf349f0b47b4d', 'Rachel Lowe', 'rachellowe@renovize.com', '+1 (911) 475-2312'),
  new ContactModel('5a566402abce24c6bfe4699d', 'Dominique Soto', 'dominiquesoto@renovize.com', '+1 (807) 551-3258'),
  new ContactModel('5a566402a6499c1d4da9220a', 'Shana Pope', 'shanapope@renovize.com', '+1 (970) 527-3082'),
  new ContactModel('5a566402f90ae30e97f990db', 'Faulkner Flores', 'faulknerflores@renovize.com', '+1 (952) 501-2678'),
  new ContactModel('5a5664027bae84ef280ffbdf', 'Holder Bean', 'holderbean@renovize.com', '+1 (989) 503-2663'),
  new ContactModel('5a566402e3b846c5f6aec652', 'Rosanne Shelton', 'rosanneshelton@renovize.com', '+1 (968) 454-3851'),
  new ContactModel('5a56640272c7dcdf59c3d411', 'Pamela Nolan', 'pamelanolan@renovize.com', '+1 (986) 545-2166'),
  new ContactModel('5a5664029a8dd82a6178b15f', 'Roy Cantu', 'roycantu@renovize.com', '+1 (929) 571-2295'),
  new ContactModel('5a5664028c096d08eeb13a8a', 'Ollie Christian', 'olliechristian@renovize.com', '+1 (977) 419-3550'),
  new ContactModel('5a5664026c53582bb9ebe9d1', 'Nguyen Walls', 'nguyenwalls@renovize.com', '+1 (963) 471-3181'),
  new ContactModel('5a56640298ab77236845b82b', 'Glenna Santana', 'glennasantana@renovize.com', '+1 (860) 467-2376'),
  new ContactModel('5a56640208fba3e8ecb97305', 'Malone Clark', 'maloneclark@renovize.com', '+1 (818) 565-2557'),
  new ContactModel('5a566402abb3146207bc4ec5', 'Floyd Rutledge', 'floydrutledge@renovize.com', '+1 (807) 597-3629'),
  new ContactModel('5a56640298500fead8cb1ee5', 'Grace James', 'gracejames@renovize.com', '+1 (959) 525-2529'),
  new ContactModel('5a56640243427b8f8445231e', 'Tanner Gates', 'tannergates@renovize.com', '+1 (978) 591-2291'),
  new ContactModel('5a5664025c3abdad6f5e098c', 'Lilly Conner', 'lillyconner@renovize.com', '+1 (842) 587-3812')]

  _contacts: ContactModel[] = this.CONTACTS;
  _contacts$ = new BehaviorSubject<Array<ContactModel>>([]);
  contacts$ = this._contacts$.asObservable();

  constructor(private UtilsService: UtilsService) { }

  public query(filterBy: FilterByModel): void {
    let contacts = this._contacts;
    contacts = this._filter(filterBy.term, contacts);
    this._contacts$.next(this._sort(contacts));
  }

  public getContactById(id: string): Observable<ContactModel> {
    let contact = this._contacts.find(contact => contact._id === id);
    contact = { ...contact };
    return contact ? of(contact) : throwError(`Contact id ${id} not found!`);
  }

  public deleteContact(id: string) {
    this._contacts = this._contacts.filter(contact => contact._id !== id);
    this._contacts$.next(this._contacts);
    this.UtilsService.store(this.KEY, this._contacts);
  }

  public saveContact(contact: ContactModel) {
    return contact._id ? this._updateContact(contact) : this._addContact(contact);
  }

  private _updateContact(contact: ContactModel) {
    this._contacts = this._contacts.map(c => contact._id === c._id ? contact : c);
    this._contacts$.next(this._sort(this._contacts));
    this.UtilsService.store(this.KEY, this._contacts);
  }

  private _addContact(contact: ContactModel) {
    contact._id = this.UtilsService.setId();
    const newContact = new ContactModel(contact._id, contact.name, contact.email, contact.phone);
    this._contacts.push(newContact);
    this._contacts$.next(this._sort(this._contacts));
    this.UtilsService.store(this.KEY, this._contacts);
  }

  private _filter(term, contacts) {
    term = term.toLocaleLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
    });
  }

  private _sort(contacts: ContactModel[]) {
    return contacts.sort((contactA, contactB) => {
      var nameA = contactA.name.toLocaleLowerCase();
      var nameB = contactB.name.toLocaleLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    })
  }
}

