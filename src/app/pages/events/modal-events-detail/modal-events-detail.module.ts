import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEventsDetailPageRoutingModule } from './modal-events-detail-routing.module';

import { ModalEventsDetailPage } from './modal-events-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEventsDetailPageRoutingModule
  ],
  declarations: [ModalEventsDetailPage]
})
export class ModalEventsDetailPageModule {}
