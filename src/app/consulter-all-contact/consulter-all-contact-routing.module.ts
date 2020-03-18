import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterAllContactPage } from './consulter-all-contact.page';

const routes: Routes = [
  {
    path: '',
    component: ConsulterAllContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterAllContactPageRoutingModule {}
