import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import {AlertController} from '@ionic/angular';
import { EventDetails } from 'src/app/interfaces/event';
import { EventAddModal } from 'src/app/models/event-model';
import { EventLike } from 'src/app/models/schedule-user-event-models';

import { ModalDetailsEventPage } from './modal-details-event/modal-details-event.page';
import { ModalNewEventPage } from './modal-new-event/modal-new-event.page';
import { ModalScheduleEventPage } from './modal-schedule-event/modal-schedule-event.page';
import { Storage } from '@ionic/storage';
import {Router, ActivatedRoute, Params} from '@angular/router';


import {GroupsSchema} from '../../models/group';
import { UserSchema } from 'src/app/models/user-model';
import { LoginService } from '../login/login.service';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  providers :[EventsService , LoginService ]
})
export class EventsPage implements OnInit {
  
  @ViewChild('favIcon') favicon:ElementRef;

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
    private alertController : AlertController,
  private _router :Router,
  private _route :ActivatedRoute
  ) {

this.identity=this.loginservice.getIdentity();
this.token=this.loginservice.getToken();
this.group = new GroupsSchema("","","","","")
              }

            

  ngOnInit() {
   // this.nextEvents();
   // this. getEventsDetails();
   //this.getUserIdFromStorage();
  // this.getGroup();
   //this.getGroupUser();
   this.getGroupAll();
  //this.getGroupSearch();
  }
 

  getGroupAll(){
   // var groupId = this.identity._id;
    this.eventService.getGroupAll(this.token).subscribe(
      response=>{
        if(response.group){
          this.groups  = response.group;
          console.log(this.groups);
          console.log("this getGroupAll");
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  
  buscar(event){
    //console.log(event);
    this.textBuscar=event.detail.value;
  };
  
  getGroupSearch(){
    // var groupId = this.identity._id;
     this.eventService.getGroupSearch(this.search,this.token).subscribe(
       response=>{
         console.log(response);
         if(response.groups){
           this.groups   = response.groups;
           console.log(this.groups);
           console.log("this getGroupSearch");
         }
       },
       error => {
         console.log(error)
       }
     )
   }

   
   async deleteGroup(id){
    const alertElement=  await this.alertController.create({
      header:'Are your sure, you want to delete it?',
      message:'This information will be permanently deleted from the database',
      buttons:[{
        text:'Cancel',
        role:'cancel'
      }, 
      {
      text:'Delete',
      handler: () =>{
        this.eventService.deleteGroup(id,this.token).subscribe(
          response=>{
            console.log(response);
            this._router.navigate(['/main/tabs/events']);
            this.getGroupAll();

          },
          error=>{
            console.log(error);
          }
        )
      
       // this.router.navigate(['/bills']);
          } 
        }
      ]
    });
    await alertElement.present();
  

}


  /*recharge(event){
    this.nextEvents(event,true);
    this.enable = true;
    this.eventDetails = [];
  }

  nextEvents(event?, pull: boolean = false){
    this.eventService.getEventsDetails(pull)
      .subscribe((data: EventDetails[])=>{
        console.log(data);
        this.eventDetails = data;
        if(this.eventDetails != null){
          for(let i = 0; i < this.eventDetails.length; i++){
            var obj = this.eventDetails[i];
            console.log(obj);
            this.lstEvents.push(obj);
         }
        }
        if(event){
          event.target.complete();
          if(this.eventDetails == null){
            this.enable = false
          }
        }
      });
  }

  incrementLike(event){
    event.userFaveDate = true; 
    console.log(event);
    var x = event.eventLikes 
    var y : number = +x;
    console.log(y);
    event.eventLikes = y + 1;
    console.log(event.eventLikes);
   }
  
  likeEvent(eventId){

    this.storage.get('idUserFromDb').then((val)=>{
      if(val != null ){
        console.log('Your id from db storage is home ', val);
        this.eventLike.eventId = eventId;
        this.eventLike.userId = val;
        console.log("like event" + this.eventLike.eventId);
        this.eventService.postNewLikeEvent(this.eventLike)
        .subscribe(data=>{
          console.log(data);   
        })
      }else{
        this.navCtrl.navigateRoot('/login');
      }
    })
  }

  getUserIdFromStorage(){
    this.storage.get('idUserFromDb').then((val)=>{
      if(val != null ){
        console.log('Your id from db storage is home ', val);
       this.idUserFromStorage = val;
      }else{
        this.navCtrl.navigateRoot('/login');
      }
    })
  }

  async scheduleEvent(eventId,eventDate,eventTitle,eventDescp,eventUrlFile){
    console.log("shedule event" + eventId);
    console.log("event date " + eventDate);
    const modal = await this.modalCrtl.create({
      component: ModalScheduleEventPage,
      componentProps:{
        'idUserFromStorage': this.idUserFromStorage,
        'eventId': eventId,
        'eventDate': eventDate,
        'eventTitle': eventTitle,
        'eventDescp': eventDescp,
        'eventUrlFile':eventUrlFile

      }
    });
    await modal.present();
  }

  async newEvent(){
    const modal = await this.modalCrtl.create({
      component: ModalNewEventPage
      //,
     // componentProps:{
      //  'eventId': eventId, need pass the user 
     //   'eventDate': eventDate
    //  }
    });

    modal.onDidDismiss()
    .then((data) => {
      console.log("Entro en el modal didmiss")
      console.log(data);

      if(data.data != undefined){
        if(data.data.date != undefined 
          && data.data.descrip != undefined  
          && data.data.date != undefined  
          && data.data.eventUrlFile != undefined  
          && data.data.title != undefined  ){
         this.lstEvents.unshift(data.data);
         console.log("imprimiendo la lista");
         console.log(this.lstEvents);
       }
      }
    });
    await modal.present();
  
  }

  async getDetailsEvent(eventId){
    console.log("this is the view details"+eventId);
    
    const modal = await this.modalCrtl.create({
      component: ModalDetailsEventPage,
      componentProps:{
       'eventId': eventId
      }
    });

    await modal.present();
  }



  

/*   getEventsDetails(){
    this.eventService.getEventsDetails().subscribe((data: EventDetails[])=>{
      this.eventDetails = data;
      console.log(this.eventDetails);
    })
  }
 */
}