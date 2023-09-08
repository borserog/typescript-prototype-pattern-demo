import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactsList = [
    new Contact('Dilsinho Junior', '839111-5354', new Date('1996-01-01'), {
      email: 'dilsim@etsy.com',
      linkedIn: 'dilsim'
    })
  ];

  constructor() {}

  ngOnInit() {}

  onItemDuplicated(contact: Contact) {
    this.contactsList.push(contact);
  }

  onItemDeleted(outerIndex: number) {
    this.contactsList = this.contactsList.filter((item, index) => {
      return outerIndex !== index;
    });
  }
}
