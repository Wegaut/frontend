import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { ModalScheduleEventPageModule } from './modal-schedule-event/modal-schedule-event.module';
import { ModalScheduleEventPage } from './modal-schedule-event/modal-schedule-event.page';
import { ModalNewEventPageModule } from './modal-new-event/modal-new-event.module';
import { ModalNewEventPage } from './modal-new-event/modal-new-event.page';
import { PipesModule } from '../../pipes/pipes.module';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx'


@NgModule({
  entryComponents:[
    ModalScheduleEventPage,
    ModalNewEventPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    
  
    EventsPageRoutingModule,
    ModalScheduleEventPageModule,
    ModalNewEventPageModule,MomentModule
  ],
  providers:[Camera],
  declarations: [EventsPage]
})
export class EventsPageModule {}
