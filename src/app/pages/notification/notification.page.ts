import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { NotificationService } from './notification.service';
import { Storage } from '@ionic/storage';
import { ModalController, NavController } from '@ionic/angular';
import { ContactSchema } from 'src/app/models/contact';
import { UserSchema } from 'src/app/models/user-model';
import {AlertController} from '@ionic/angular';

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
  public contacts : ContactSchema;
  public textBuscar="";
 

// VER CURSO 232//

  constructor(
    private notificationService: NotificationService,
    private storage: Storage,
    private navCtrl: NavController,
    private modalCrtl: ModalController,
    private loginservice:LoginService,  
    private alertController : AlertController
    ) { 

      this.identity=this.loginservice.getIdentity();
      this.token=this.loginservice.getToken();
      this.contacts = new  ContactSchema();
      
    }

  ngOnInit():void {
    this.getContact();

;    }

  doRefresh(event){
    console.log("do refresh")
      this.ngOnInit();
      event.target.complete();
  }

  buscar(event){
    //console.log(event);
    this.textBuscar=event.detail.value;
  };


  getContact(){
    var userId = this.identity._id;
    this.notificationService.getContactByUser(userId,this.token).subscribe(
      response=>{
        if(response.user){
          this.user = response.user.contacts;
         // console.log(this.user.contacts);
        }
      },
      error => {
        console.log(error)
      }
    )
  }
  async deleteContact(id,contacts){
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
        this.notificationService.deleteContact(id,contacts,this.token,).subscribe(
          response=>{
            console.log(this.identity._id);
            console.log(this.token);
            console.log(this.contacts._id);
            console.log(response);
            this.getContact();
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

  /*getContacts(){
    var userId = this.identity._id;
    this.notificationService.getContacts(userId,this.token).subscribe(
      response=>{
        if(response.user){
          this.user = response.user;
          console.log("esto es una prueba de muchos contactos")
          console.log(this.user.contacts);
        }
      },
      error => {
        console.log(error)
      }
    )
  }
   */
}
