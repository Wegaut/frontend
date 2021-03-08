import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalHomeDetailPage } from './modal-home-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ModalHomeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalHomeDetailPageRoutingModule {}
