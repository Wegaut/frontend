import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {LoginService } from '../../login/login.service';
import {HomeService } from '../../home/home.service';
import {EventsService } from '../../events/events.service';


import {GroupsSchema} from '../../../models/group';
import { UserSchema } from 'src/app/models/user-model';
import { MessageSchema } from 'src/app/models/message';



@Component({
  selector: 'app-modal-home-detail',
  templateUrl: './modal-home-detail.page.html',
  styleUrls: ['./modal-home-detail.page.scss'],
  providers:[ LoginService, HomeService, EventsService ]
})

export class ModalHomeDetailPage implements OnInit {


  public identity;
  public token;
  public status;
  public user : UserSchema[];
  public group: GroupsSchema;
  public message: MessageSchema;
  public messages;
  
  
  constructor( private loginService : LoginService,
              private homeService: HomeService,
              private eventsServce: EventsService,
              private _router :Router,
              private _route :ActivatedRoute,
  ) { 
    this.identity=this.loginService.getIdentity();
    this.token=this.loginService.getToken();
    this.message = new MessageSchema();
    this.group = new GroupsSchema("","","","","")

 
  }
  ngOnInit() {
    this.getGroup();
  }

 getGroup(){
    this._route.params.subscribe(params =>{
      let id = params['id'];

      this.homeService.getGroupHome(id,this.token).subscribe(
        response =>{
          if(response.group){
            this.group=response.group; 
            console.log(response.group.messsages)
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

addMesssage(form){
 this.homeService.addMessage(this.token, this.message, this.group._id).subscribe(
   response=>{
     console.log(this.token);
     console.log(this.message);
     console.log(this.group._id);
    if(!response.group){;
      this.status='error'
      console.log(response.group);
    }else {
      this.status ="success";
      this.group = response.group;
      form.reset();
      console.log(this.group.messages);
    }
   },
   error =>{
     this.status ='error';
    console.log(error);
   }
 );
}


/*const foundIndex = this.ordersList.findIndex(({ orderNumber }) => orderNumber === orderSelected.orderNumber);
    this.ordersList = this.ordersList.filter((_, index) => index !== foundIndex);
    console.log(this.ordersList);
*/
}
