import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { EventDetails } from 'src/app/interfaces/event';
import { EventAddModal } from 'src/app/models/event-model';
import { EventLike } from 'src/app/models/schedule-user-event-models';

import { ModalDetailsEventPage } from '../modal-details-event/modal-details-event.page';
import { ModalNewEventPage } from '../modal-new-event/modal-new-event.page';
import { ModalScheduleEventPage } from '../modal-schedule-event/modal-schedule-event.page';
import { Storage } from '@ionic/storage';


import {GroupsSchema} from '../../../models/group';
import { UserSchema } from 'src/app/models/user-model';
import { LoginService } from '../../login/login.service';
import { EventsService } from '../events.service';
@Component({
  selector: 'app-modal-events-detail',
  templateUrl: './modal-events-detail.page.html',
  styleUrls: ['./modal-events-detail.page.scss'],
   providers :[EventsService , LoginService ]
})
export class ModalEventsDetailPage implements OnInit {
  public user : Array <UserSchema>;
  public identity;
  public token;
  public status;
  public search;
  public groups: GroupsSchema;
  public group;
  public textBuscar="";

  constructor(private eventService: EventsService,
  private loginservice:LoginService,
  //private modalCrtl: ModalController,
  //private elementRef: ElementRef,
  //private storage: Storage,
  private navCtrl: NavController,
  private _router :Router,
  private _route :ActivatedRoute) {

this.identity=this.loginservice.getIdentity();
this.token=this.loginservice.getToken();
this.group = new GroupsSchema("","","","","")
              }

  ngOnInit() {
  }

  
  addGroup(fAddGroup){
    this.eventService.postGroup(this.token,this.group).subscribe(
      response=>{
        console.log(response);
        if(response.group){
          this.status="success";
          this._router.navigate(['/main/tabs/events']);
          this.group=response.group;
          this._router.navigate(['/main/tabs/events']);
        }else{
          this.status="error";
        }
      },
      error=>{
        this.status="error";
        console.log(error);
      }
    )
  }

}
