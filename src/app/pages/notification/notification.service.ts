import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { UserSchema } from 'src/app/models/user-model';
import { LoginService } from '../login/login.service';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //url = 'https://domappssuiteservices.com/Wegaut2020/WegautAppWebServices/';
  urlEndpointb2b = 'https://wegautb2b.herokuapp.com/api/';

  public identity;

  constructor(
    private http: HttpClient,
    private loginservice:LoginService 
              ) { 
                this.identity=this.loginservice.getIdentity();
              }
 
postGroup(token,contacts,identity):Observable<any> {
  let params =JSON.stringify(contacts);
  let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                  .set('Authorization', token);
return this.http.post(this.urlEndpointb2b+'POST_CONTACT/'+identity, params, {headers:headers});
}

  getContactByUser(userId,token):Observable<any> {
    //let params1 = new HttpParams().set('userId', userId)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', token);
    return this.http.get(this.urlEndpointb2b+'GET_CONTACTS/'+userId, {headers:headers});

  }

  getContacts(userId,token):Observable<any> {
    //let params1 = new HttpParams().set('userId', userId)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', token);
    return this.http.get(this.urlEndpointb2b+'GET_CONTACTS/'+userId, {headers:headers});

  }

  deleteContact(identity,contacts,token):Observable<any> {
    //let params1 = new HttpParams().set('userId', userId)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', token);
    return this.http.delete(this.urlEndpointb2b+'DELETE_CONTACT/'+identity+'/'+contacts, {headers:headers});

  }




}
