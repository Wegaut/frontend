import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalChatHomePage } from './modal-chat-home.page';

const routes: Routes = [
  {
    path: '',
    component: ModalChatHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalChatHomePageRoutingModule {}
