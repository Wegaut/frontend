import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNotificationDetailPageRoutingModule } from './modal-notification-detail-routing.module';

import { ModalNotificationDetailPage } from './modal-notification-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNotificationDetailPageRoutingModule
  ],
  declarations: [ModalNotificationDetailPage]
})
export class ModalNotificationDetailPageModule {}
