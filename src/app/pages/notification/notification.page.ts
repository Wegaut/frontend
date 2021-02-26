import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { NotificationService } from './notification.service';
import { Storage } from '@ionic/storage';
import { ModalController, NavController } from '@ionic/angular';
import { ContactSchema } from 'src/app/models/contact';
import { UserSchema } from 'src/app/models/user-model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  providers :[NotificationService,LoginService ]

})
export class NotificationPage implements OnInit {


  public user : UserSchema;
  public identity 
  public token;
  public status:string;
  public contacts : Array <ContactSchema>
 


  constructor(
    private notificationService: NotificationService,
    private storage: Storage,
    private navCtrl: NavController,
    private modalCrtl: ModalController,
    private loginservice:LoginService
    ) { 

      this.identity=this.loginservice.getIdentity();
      this.token=this.loginservice.getToken();
      
    }

  ngOnInit():void {
    this.getContact();
    }

  doRefresh(event){
    console.log("do refresh")
      this.ngOnInit();
      event.target.complete();
  }

  addContact(fAddContact){
    this.notificationService.postGroup(this.token,this.contacts).subscribe(
      response=>{
        console.log(response);
        if(response.user){
          this.status="success";
          this.user = response.user.contacts;
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

  getContact(){
    var userId = this.identity._id;
    this.notificationService.getContactByUser(userId,this.token).subscribe(
      response=>{
        if(response.user){
          this.user = response.user.contacts;
         // console.log(this.user.contacts);
          console.log(response.user.contacts);
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  getContacts(){
    var userId = this.identity._id;
    this.notificationService.getContacts(userId,this.token).subscribe(
      response=>{
        if(response.user){
          this.user = response.user;
          console.log(this.user.contacts);
        }
      },
      error => {
        console.log(error)
      }
    )
  }
   
}
