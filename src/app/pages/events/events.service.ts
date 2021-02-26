import {HttpClient, HttpHeaders} from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { EventComments, EventDetails,EventSheduleDetails, SelectedEventDetails} from 'src/app/interfaces/event';
import { EventModel, EventPhoto } from 'src/app/models/event-model';
import { EventLike, ScheduleUserEvent } from 'src/app/models/schedule-user-event-models';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { UserSponsor } from 'src/app/interfaces/userSponsor';
import { UserComment } from 'src/app/models/user-model';
import {GroupsSchema} from '../../models/group';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  pageEvent = 0;
  search;


  urlEndpointb2b = 'https://wegautb2b.herokuapp.com/api/';
  constructor(private http: HttpClient,fileTransfer: FileTransfer
              ) { 
                this.search="prueba"
              }
           
  postGroup(token,group):Observable<any> {
  let params =JSON.stringify(group);
  let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', token);
  return this.http.post(this.urlEndpointb2b+'POST_GROUP', params, {headers:headers});
  }

  getGroup(userId,token):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('Authorization', token);
   return this.http.get(this.urlEndpointb2b+'GET_GROUP/'+userId, {headers:headers});
  }

  getGroupAll(token):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('Authorization', token);
   return this.http.get(this.urlEndpointb2b+'GET_GROUPS', {headers:headers});
  }
 
  getGroupUser(groupId,token):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('Authorization', token);
   return this.http.get(this.urlEndpointb2b+'GET_GROUP_USER/'+groupId, {headers:headers});
  } 

  getGroupSearch(search,token):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('Authorization', token);
   return this.http.get(this.urlEndpointb2b+'GET_SEARCH_GROUP/'+this.search, {headers:headers});
  } 

  
  deleteGroup(id,token):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('Authorization', token);
   return this.http.delete(this.urlEndpointb2b+'DELETE_GROUP/'+id, {headers:headers});
  }
 




































  /*getEventsDetails(pull: boolean = false){
    if(pull){
      this.pageEvent = 0;
    }
    this.pageEvent ++;
    return this.http.get<EventDetails[]>(`${this.url}GetEventDetails.php/?page=${ this.pageEvent }`);
   // let params1 = new HttpParams().set('page',this.pageEvent.toString());
   // return this.http.get<EventDetails[]>(`${this.url}GetEventDetails.php`,{params:params1});
  }

  postNewScheduleEvent(scheduleUserEvent: ScheduleUserEvent){
    return this.http.post(`${this.url}PostNewScheduleEvent.php`, scheduleUserEvent,  {responseType: 'text'} );
  }

  getScheduleUserEvent(userId: string){
    let params1 = new HttpParams().set('userId', userId);
    return this.http.get<EventSheduleDetails[]>(`${this.url}GetScheduleUserEvents.php`,{params: params1})
  }

  postNewLikeEvent(likeUserEvent: EventLike){
    return this.http.post(`${this.url}PostNewLikeEvent.php`, likeUserEvent,  {responseType: 'text'} );
  }

  postNewEvent(newEvent: EventModel){
    console.log("from service new event" + newEvent);
    return this.http.post(`${this.url}PostNewEvent.php`, newEvent,  {responseType: 'text'} );
  }

  getAllUserSponsor(userType){
    let params1 = new HttpParams().set('userType', userType);
    return this.http.get<UserSponsor[]>(`${this.url}GetUsersSponsor.php`,{params: params1})
  }

  getDetailsEventId(eventId){
    let params1 = new HttpParams().set('eventId', eventId);
    return this.http.get<SelectedEventDetails[]>(`${this.url}GetDetailsSelectedEvent.php`,{params: params1})
  }

  getSponsorOnSelectedEvent(eventId){
    let params1 = new HttpParams().set('eventId', eventId);
    return this.http.get<UserSponsor[]>(`${this.url}GetSponsorOnSelectedEvent.php`,{params: params1})
  }

  getCommentsEvent(eventId){
    let params1 = new HttpParams().set('eventId', eventId);
    return this.http.get<EventComments[]>(`${this.url}GetCommentsEvent.php`,{params: params1})
  }

  postCommentEvent(userComment: UserComment){
    return this.http.post(`${this.url}PostCommentEvent.php`, userComment,  {responseType: 'text'} );
  }

  postPhotoEvent(photoEvent: EventPhoto){
    return this.http.post(`${this.url}PostNewPhotoEventUser.php`, photoEvent,  {responseType: 'text'} );
  }

  getPhotoEvent(eventId){
    let params1 = new HttpParams().set('eventId', eventId);
    return this.http.get<EventPhoto[]>(`${this.url}GetPhotosEvent.php`,{params: params1})
  }

/* 
  //upload image selected or take photo
  uploadImage(imgUrl:string){
    const option: FileUploadOptions = {
      fileKey:'image'
    };

    const fileTransfer: FileTransferObject = this.fileTransfer.create();
    fileTransfer.upload(imgUrl,`${this.url}PostNewEventImg.php`,option)
    .then(data=>{
      console.log(data);
      alert("sucess");
    }).catch(err =>{
      console.log('error uploading', err);
      alert("error"+JSON.stringify(err));
    });
  } */


}
