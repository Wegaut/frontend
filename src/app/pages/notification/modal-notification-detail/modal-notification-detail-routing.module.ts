import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNotificationDetailPage } from './modal-notification-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNotificationDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNotificationDetailPageRoutingModule {}
