import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  isShown: boolean
  filterBy = { txt: '' }
  selectedContact;
  @Input() contacts;
  @Input() isShownVal: boolean;
  val;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    // this.isShownTEST()
    // console.log("ContactListComponent -> ngOnInit -> this.isShownVal", this.isShownVal)
    this.val = this.contactsToShow
  }

  get contactsToShow() {
    if (!this.filterBy.txt) return this.contacts
    return this.contacts.filter(contacts => contacts.name.toLowerCase().includes(this.filterBy.txt.toLowerCase()))
  }


  isShownTEST(isShownVal: boolean) {
    this.isShown = isShownVal

  }





}
