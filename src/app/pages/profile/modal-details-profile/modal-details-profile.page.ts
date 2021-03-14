import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventProfileUser } from 'src/app/interfaces/event';
import { UserEventNum, UserFollowersNumber } from 'src/app/interfaces/user-profile';
import { ModalDetailsEventPage } from '../../events/modal-details-event/modal-details-event.page';
import { ModalFavEventUserPage } from '../../events/modal-fav-event-user/modal-fav-event-user.page';
import { ModalScheduleEventPage } from '../../events/modal-schedule-event/modal-schedule-event.page';
import { ProfileService } from '../profile.service';
import { Storage } from '@ionic/storage';
import { UserFollow } from 'src/app/models/user-model';
import { HomeService } from '../../home/home.service';
import { NotificationModel } from 'src/app/models/notification-model';
import { NotificationService } from '../../notification/notification.service';
import { ModalFollowersDetailsPage } from '../modal-followers-details/modal-followers-details.page';
import { LoginService } from '../../login/login.service';
import { UserSchema } from 'src/app/models/user-model';
import {global} from '../../../global.service';


@Component({
  selector: 'app-modal-details-profile',
  templateUrl: './modal-details-profile.page.html',
  styleUrls: ['./modal-details-profile.page.scss'],
  providers:[LoginService]
})
export class ModalDetailsProfilePage implements OnInit {
  
  userFollowersNumber: UserFollowersNumber;
  userEventNumber: UserEventNum;
  eventProfileUser: EventProfileUser[];
  userBrand: string;
  userName: string;
  userTradeName: string;
  userProfilePicture: string;
  userType: string;
  userAbout: string;
  userLevel: string;

  checkFollowUser;
  userFollow = new UserFollow;
  userFollowedId : string;
  public user :UserSchema;
  public identity 
  public token;
  public status:string;
  public name;    
  public lastname;
  public updatedAt;
  public email;
  public nPhone;
  public photoProfile;
  public AfuConfig;
  public url;


  @Input() sponsorUserId;

  constructor( private profileService: ProfileService,
               private modalCrtl: ModalController,
               private storage: Storage,
               private homeService: HomeService,
               private notificationService: NotificationService,
               private loginservice: LoginService)
                { 
this.identity=this.loginservice.getIdentity();
this.token=this.loginservice.getToken();
this.user= new UserSchema();
this.url=global.url;
                }

  ngOnInit() {
   /* console.log("sponsor from modal"+this.sponsorUserId);
    this.getUserProfileInfo(this.sponsorUserId);
    this.getUserEventsInfo(this.sponsorUserId);
    this.getUserFollowers(this.sponsorUserId);
    this.getUserEventNum(this.sponsorUserId);
    this.checkIfFollowUser();*/
  }

  
  putProfile(Pform){
    console.log("metodo put")
    var user = this.identity._id;
    this.profileService.putProfileUser(this.user).subscribe(
      response=>{
        if(!response.user){
          this.status="error";
      
        }else{
          this.status="success";
          localStorage.setItem('idenity',JSON.stringify(this.user));
        }
      },
      error => {
         this.status="error";
        console.log(error)
      }
    )
  }
/*
  getUserProfileInfo(userId){
    this.profileService.getUserProfileDetails(userId)
    .subscribe((data)=>{
    
      console.log("profile user details userId" + data[0].userId);
      console.log("profile user details userBrand" + data[0].userBrand);
      console.log("profile user details userName" + data[0].userName);
      console.log("profile user details userTradeName" + data[0].userTradeName);
      console.log("profile user details userProfilePicture" + data[0].userProfilePicture);
      console.log("profile user details userType" + data[0].userType);
      console.log("profile user details userType" + data[0].userAbout);

      this.userFollowedId =  data[0].userId;
      this.userBrand = data[0].userBrand;
      this.userBrand = data[0].userBrand;
      this.userName = data[0].userName;
      this.userTradeName = data[0].userTradeName;
      this.userProfilePicture = data[0].userProfilePicture;
      this.userType = data[0].userType;
      this.userAbout = data[0].userAbout;
      this.userLevel = data[0].userLevel;
    
  });
}

getUserEventsInfo(userId){
  this.profileService.getUserProfileEventsDetails(userId)
  .subscribe((data)=>{
    this.eventProfileUser = data;
    console.log(data);
  })
}

getUserFollowers(userId){
  this.profileService.getUserFollowers(userId)
  .subscribe((data)=>{
    this.userFollowersNumber = data[0].followers;
    console.log(data);
  })
}

getUserEventNum(userId){
  this.profileService.getEventUserNum(userId)
  .subscribe((data)=>{
    this.userEventNumber = data[0].userEventNumber;
    console.log(data);
  })
}

async goToScheduleEvents(){
 
      this.scheduleEvent(this.sponsorUserId);
}


async scheduleEvent(userId){
  const modal = await this.modalCrtl.create({
    component: ModalScheduleEventPage,
    componentProps:{
      'idUserFromStorage': userId
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

async getUserFavEvets(){
  const modal = await this.modalCrtl.create({
    component: ModalFavEventUserPage,
    componentProps:{
    'userId': this.sponsorUserId
    }
  });

  await modal.present();
}

closeScheduleModal(){
    this.modalCrtl.dismiss();
  }

  checkIfFollowUser(){

    this.storage.get('idUserFromDb').then((val)=>{
      if(val != null ){
        console.log(val);
        console.log(this.sponsorUserId);
        this.profileService.getCheckUserFollow(val, this.sponsorUserId)
        .subscribe((data)=>{
          if(data != null){
            this.checkFollowUser = data;
            console.log("data es distinto de nulo")
          }else{
            this.checkFollowUser = data;
            console.log("data es nulo")
          }
        })
      }
    })
  
  }




  changeShowFollow(){
    this.checkIfFollowUser();
  }

  
  async checkFollowers(){
    
    const modal = await this.modalCrtl.create({
      component: ModalFollowersDetailsPage,
      componentProps:{
        'sponsorUserId': this.sponsorUserId,
        'userName': this.userName
       }
    });

    await modal.present();
  }
  

*/
}
