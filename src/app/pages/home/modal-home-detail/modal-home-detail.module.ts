import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

import { IonicModule } from '@ionic/angular';

import { ModalHomeDetailPageRoutingModule } from './modal-home-detail-routing.module';

import { ModalHomeDetailPage } from './modal-home-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentModule,
    ModalHomeDetailPageRoutingModule
  ],
  declarations: [ModalHomeDetailPage]
})
export class ModalHomeDetailPageModule {}
