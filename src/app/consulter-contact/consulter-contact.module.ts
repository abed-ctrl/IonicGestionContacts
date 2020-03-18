import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulterContactPageRoutingModule } from './consulter-contact-routing.module';

import { ConsulterContactPage } from './consulter-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsulterContactPageRoutingModule
  ],
  declarations: [ConsulterContactPage]
})
export class ConsulterContactPageModule {}
