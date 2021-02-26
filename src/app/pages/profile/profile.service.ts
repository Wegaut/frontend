import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSchema } from 'src/app/models/user-model';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public identity;
  public token; 

  //url = 'https://domappssuiteservices.com/Wegaut2020/WegautAppWebServices/';

  urlEndpointb2b = 'https://wegautb2b.herokuapp.com/api/';
  constructor(private http: HttpClient,
              private fileTransfer: FileTransfer) { }


  getProfileUser(userId,token):Observable<any> {
    //let params1 = new HttpParams().set('userId', userId)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', token);
    return this.http.get(this.urlEndpointb2b+'GET_CONTACTS/'+userId, {headers:headers});

  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    }
  getToken(){
      let token = localStorage.getItem('token');
      if(token  && token != null && token !=undefined && token !="undefined"){
     
        this.token = token;
      }else{
        this.token=null;
      }
      return this.token;
    }
    deleteToken() {
    localStorage.removeItem('token');
    }
    isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
    return true
    }
    return false;
    }

    getIdentity(){
      let identity = JSON.parse(localStorage.getItem('identity'));
      if(identity  && identity != null && identity !=undefined && identity !="undefined"){
     
        this.identity = identity;
     
      }else{
        this.identity=null;
  
      }
      return this.identity;
    }
  

  putProfileUser(user):Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', this.getToken());
    return this.http.put(this.urlEndpointb2b+'PUT_USER/',params, {headers:headers});

  }

}
