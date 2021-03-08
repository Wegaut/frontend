import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEventsDetailPage } from './modal-events-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEventsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEventsDetailPageRoutingModule {}
