import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterContactPage } from './consulter-contact.page';

const routes: Routes = [
  {
    path: '',
    component: ConsulterContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterContactPageRoutingModule {}
