import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { ConsulterContactPopoverComponent } from "../consulter-contact-popover/consulter-contact-popover.component";

@Component({
  selector: "app-consulter-contact",
  templateUrl: "./consulter-contact.page.html",
  styleUrls: ["./consulter-contact.page.scss"]
})
export class ConsulterContactPage implements OnInit {
  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ConsulterContactPopoverComponent,
      event: ev,
      translucent: false
    });

    return await popover.present();
  }
  ngOnInit() {}
}
