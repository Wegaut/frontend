import { Component} from '@angular/core';
import { EventsService } from '../events/events.service';
import { Storage } from '@ionic/storage';
import { ModalController, NavController } from '@ionic/angular';
import { EventSheduleDetails } from 'src/app/interfaces/event';
import { CountdownComponent } from 'ngx-countdown';
import { HomeService } from './home.service';
import { LoginService } from '../login/login.service';
import {GroupsSchema} from '../../models/group';
import { UserSchema } from 'src/app/models/user-model';
import { ModalChatPage } from '../profile/modal-chat/modal-chat.page';
import {AlertController} from '@ionic/angular';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[ LoginService, HomeService, EventsService ]
})


export class HomePage {

  eventSheduleDetails : EventSheduleDetails[];
  public user : Array <UserSchema>;
  public identity;
  public token;
  public status;
  public groups: GroupsSchema;
  public textSearch="";
  public messages;


  constructor(private eventService: EventsService,
              private storage: Storage,
              private navCtrl: NavController,
              private modalCrtl: ModalController,
              private homeService: HomeService,
              private loginservice:LoginService,
              private alertController : AlertController,
              private _router :Router,
              private _route :ActivatedRoute
              ) 
              {
this.identity=this.loginservice.getIdentity();
this.token=this.loginservice.getToken();
              }


  ngOnInit( ) {
    this.getGroupUser();
   /* this.storage.get('idUserFromDb').then((val)=>{
      if(val != null ){
        console.log('Your id from db storage is home ', val);
        //this.getEventShedule(val);
      }else{
        this.navCtrl.navigateRoot('/login');
      }
    })

    console.log("valor onInitTest")
   // console.log(this.startCountDownDate("2021-11-03"));
  */}

  search(event){
    //console.log(event);
    this.textSearch=event.detail.value;
  };

  
  
  getGroupUser(){
    var userId = this.identity._id;
    this.eventService.getGroupUser(userId,this.token).subscribe(
      response=>{
        if(response.group){
          this.groups = response.group;
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  getGroup(){
    this._route.params.subscribe(params =>{
      let id = params['id'];

      this.homeService.getGroupHome(id,this.token).subscribe(
        response =>{
          if(response.group){
            this.groups=response.group; 
           // for ( const messageDetails in this.group.messages) { console.log(messageDetails)}; 
          /*
          this.group.messages.forEach(obj => {
            Object.entries(obj).forEach(([key, value]) => {
                console.log(`${key} ${value}`);
                //this.rescueMsg.push(); 
            });
            console.log('-------------------');
          });
*/
          }else{
            this._router.navigate(['/main/tabs/home']);
          }
        },
        error =>{
          console.log(error);
        }
      );
  });
}

  getChatSearch(){
    // var groupId = this.identity._id;
     this.eventService.getGroupSearch(this.search,this.token).subscribe(
       response=>{
         console.log(response);
         if(response.groups){
           this.groups   = response;
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
            this._router.navigate(['/main/tabs/home']);
            this.getGroupUser();

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
}
