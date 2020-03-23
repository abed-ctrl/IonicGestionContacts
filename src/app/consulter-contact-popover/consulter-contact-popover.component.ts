import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-consulter-contact-popover",
  templateUrl: "./consulter-contact-popover.component.html",
  styleUrls: ["./consulter-contact-popover.component.scss"]
})
export class ConsulterContactPopoverComponent implements OnInit {
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  doc() {
    alert();
    window.open("https://ionicframework.com/docs/v4/", "_blank");
    this.popoverController.dismiss();
  }
}
