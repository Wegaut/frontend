import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalChatHomePageRoutingModule } from './modal-chat-home-routing.module';

import { ModalChatHomePage } from './modal-chat-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalChatHomePageRoutingModule
  ],
  declarations: [ModalChatHomePage]
})
export class ModalChatHomePageModule {}
