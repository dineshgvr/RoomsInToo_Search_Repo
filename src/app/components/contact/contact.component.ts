import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public userList = [];
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  getUser() {
    this.contactService.getUser().subscribe((response) => {
      this.userList = response;
    })
  }

}
