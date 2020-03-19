import { Component, OnInit } from "@angular/core";
import { DbService } from "../services/db.service";
import { Router } from "@angular/router";
import { CallNumber } from "@ionic-native/call-number/ngx";

@Component({
  selector: "app-consulter-all-contact",
  templateUrl: "./consulter-all-contact.page.html",
  styleUrls: ["./consulter-all-contact.page.scss"]
})
export class ConsulterAllContactPage implements OnInit {
  Data: any[] = [];

  constructor(
    private db: DbService,
    private router: Router,
    private callNumber: CallNumber
  ) {}

  ngOnInit() {
    this.db.dbState().subscribe(res => {
      if (res) {
        this.db.fetchContacts().subscribe(item => {
          this.Data = item;
        });
      }
    });
  }

  callContact(telephone) {
    this.callNumber
      .callNumber(telephone, true)
      .then(res => console.log("Launched dialer!", res))
      .catch(err => console.log("Error launching dialer", err));
  }
}
