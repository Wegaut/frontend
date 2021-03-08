
import { UserProfile } from 'src/app/interfaces/user-profile';
import { UserFollow } from 'src/app/models/user-model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'https://domappssuiteservices.com/Wegaut2020/WegautAppWebServices/';
  urlEndpointb2b = 'https://wegautb2b.herokuapp.com/api/';

constructor(private http: HttpClient) { }

  getUserToFollow(userId: string){
    let params1 = new HttpParams().set('userId', userId);
    return this.http.get<UserProfile[]>(`${this.url}GetUserToFollow.php`,{params: params1})
  }

  postFollowUser(userFollow: UserFollow){
    return this.http.post(`${this.url}PostFollowUser.php`, userFollow,  {responseType: 'text'} );
  }

  getFollowersUser(userId: string){
    let params1 = new HttpParams().set('userId', userId);
    return this.http.get<UserProfile[]>(`${this.url}GetFollowersUserDetails.php`,{params: params1})
  }

  getGroupHome(id,token):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                    .set('Authorization', token);
    return this.http.get(this.urlEndpointb2b+'GET_GROUP/'+id, {headers:headers});
  }


  addMessage(token, message,groupId):Observable<any>{
    let params = JSON.stringify(message);
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('Authorization', token);
    return this.http.post(this.urlEndpointb2b+'POST_MESSAGE/'+groupId, params, {headers:headers});

  }

  deleteMessage(token,groupId,messageId):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
                                   .set('Authorization', token);
    return this.http.delete(this.urlEndpointb2b+'DELETE_MESSAGE/'+groupId+'/'+messageId,{headers:headers});

  }



}
