import {Component, OnInit} from '@angular/core';
import {PhonecontactlistService} from "../../Services/phonecontactlist/phonecontactlist.service";

@Component({
  selector: 'app-phonecontactlist',
  templateUrl: './phonecontactlist.component.html',
  styleUrl: './phonecontactlist.component.css'
})
export class PhonecontactlistComponent implements OnInit {
  phoneContactList: string[] = [];
  phoneContactName: string = '';

  constructor(private phoneContactListService: PhonecontactlistService) {
  }

  ngOnInit() {
    this.phoneContactList = this.phoneContactListService.getPhoneContacts();
  }

  // TODO ADD DATA
  addPhoneContact() {
    console.log(this.phoneContactList);
    this.phoneContactListService.addPhoneContact(this.phoneContactName);
    this.phoneContactName = '';
  }
}
