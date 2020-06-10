import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.css']
})
export class ContactDetailsPageComponent implements OnInit {
  contact;
  @Input() currContact;




  constructor() { }

  ngOnInit() {

    this.contact = this.currContact
  }


  goBack() {
    console.log('yay')

  }
}
