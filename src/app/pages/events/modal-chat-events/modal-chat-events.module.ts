import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

import { IonicModule } from '@ionic/angular';

import { ModalChatEventsPageRoutingModule } from './modal-chat-events-routing.module';

import { ModalChatEventsPage } from './modal-chat-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentModule,
    ModalChatEventsPageRoutingModule
  ],
  declarations: [ModalChatEventsPage]
})
export class ModalChatEventsPageModule {}
