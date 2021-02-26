import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { UserSchema } from 'src/app/models/user-model';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //url = 'https://domappssuiteservices.com/Wegaut2020/WegautAppWebServices/';
  urlEndpointb2b = 'https://wegautb2b.herokuapp.com/api/';
  constructor(private http: HttpClient,
              ) { }
 
postGroup(token,contacts):Observable<any> {
  let params =JSON.stringify(contacts);
  let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                  .set('Authorization', token);
return this.http.post(this.urlEndpointb2b+'POST_CONTACT', params, {headers:headers});
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

  deleteContact(userId,contactId,token):Observable<any> {
    //let params1 = new HttpParams().set('userId', userId)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', token);
    return this.http.get(this.urlEndpointb2b+'DELETE_CONTACT/'+userId+'/'+contactId, {headers:headers});

  }




}
