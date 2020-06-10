import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contacts: Contact[]
  selectedContact: Contact

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.contacts$.subscribe(contacts => {
      console.log('Contacts', contacts);
      this.contacts = contacts;
    })
    this.contactService.loadContacts();


  }




}
