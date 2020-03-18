import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulterAllContactPageRoutingModule } from './consulter-all-contact-routing.module';

import { ConsulterAllContactPage } from './consulter-all-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsulterAllContactPageRoutingModule
  ],
  declarations: [ConsulterAllContactPage]
})
export class ConsulterAllContactPageModule {}
