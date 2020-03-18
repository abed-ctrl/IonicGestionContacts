import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ConsulterContactPageRoutingModule } from "./consulter-contact-routing.module";

import { ConsulterContactPage } from "./consulter-contact.page";
import { ConsulterContactPopoverComponent } from "../consulter-contact-popover/consulter-contact-popover.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsulterContactPageRoutingModule
  ],
  entryComponents: [ConsulterContactPopoverComponent],
  declarations: [ConsulterContactPage, ConsulterContactPopoverComponent]
})
export class ConsulterContactPageModule {}
