import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.css']
})
export class ContactPreviewComponent implements OnInit {

  val;
  @Input() contact
  selectedContact;
  isShown: boolean
  @Output() isShownVal = new EventEmitter();
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.val = this.contact
    this.isShown = false
  }

  goToContactDetails(id: string) {
    this.isShown = this.isShown ? false : true
    this.contactService.getContactById(id).subscribe(contact => {
      this.selectedContact = contact
    })
    this.isShownVal.emit(this.isShown)
    console.log('this', this.isShown)

  }

}
