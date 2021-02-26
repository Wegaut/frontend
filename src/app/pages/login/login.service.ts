import {HttpClient, HttpHeaders} from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { UserSchema } from 'src/app/models/user-model';
import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  idUserFromDb: string = null;
  public identity;
  public token; 

  redirectUrl: string;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  //url = 'https://domappssuiteservices.com/Wegaut2020/WegautAppWebServices/';
  urlEndpointb2b = 'https://wegautb2b.herokuapp.com/api/';

  constructor(private http: HttpClient,
              private storage: Storage,
              private navCtrl: NavController) { }

  postRegisterUser(registerUser: UserSchema){
    return this.http.post(`${this.urlEndpointb2b}POST_USER`, registerUser,  {responseType: 'text'} );
  }

  postRegisterEnterpriseUser(registerUser: UserSchema){
    return this.http.post(`${this.urlEndpointb2b}PostRegisterEnterpriseUser.php`, registerUser,  {responseType: 'text'} );
  }

 /* userlogin(email, password) {
    
    return this.http.post(`${this.urlEndpointb2b}POST_LOGIN`, {email,password},  {responseType: 'json'} )
    .pipe(map((resp:any) => {
      this.setToken(resp[0].siteStoreId);
      console.log( this.setToken(resp[0].siteStoreId))
      this.getLoggedInName.emit(true);
      console.log("resp");
      console.log(resp[0].userId);

      if(resp[0].userId != null){
          this.saveIdUser(resp[0].userId);
      }else{
        resp[0].userId = null;
        this.storage.clear();
      }
      return resp;
      }
    ));
    }

   */

   //token
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
      this.saveIdUser(this.token);
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
  

    //Save token in storage
    async saveIdUser(idUserFromDb: string){
      this.idUserFromDb = idUserFromDb;
      await this.storage.set('idUserFromDb', idUserFromDb);

      this.getIdUserFromDbStorage();
    } 

    getIdUserFromDbStorage(){
        this.storage.get('idUserFromDb').then((val)=>{
          if(val != null ){
            console.log('Your id from db storage is ', val);
          }else{
            this.navCtrl.navigateRoot('/login');
          }
        })
      
        
    }

    signin(user, gettoken =null): Observable<any> {

      //comprobar que el gettoken llegaba
        if(gettoken!=null){
          user.gettoken=gettoken;
          this.saveIdUser(gettoken);
        }
      // convertir objeto del usuario a un JsonString
        let params = JSON.stringify(user);
  
      //Definir las cabeceras
       let headers = new HttpHeaders().set('Content-Type','application/json');
      
       //peticion Ajax
      return this.http.post(this.urlEndpointb2b+'POST_LOGIN',params,{headers:headers});
     
    }


    signup(user): Observable<any> {
      // convertir objeto del usuario a un JsonString
        let params = JSON.stringify(user);
      //Definir las cabeceras
        let headers = new HttpHeaders().set('Content-Type','application/json');
        //peticion Ajax
        return this.http.post(this.urlEndpointb2b+'POST_USER',params,{headers:headers});
      
    }

/* 
    //IdUser validator with storage ionic
    async uploadStorageIdUserFromDB(){
      this.idUserFromDb = await this.storage.get('idUserFromDb') || null;
    }

    //Check if iduser exitst in storage
    async validateIdUser(): Promise<boolean>{
      await this.uploadStorageIdUserFromDB();
      
      //if no extis the iduser in the storage go out
      if( !this.idUserFromDb){
        this.navCtrl.navigateRoot('/login');
        return Promise.resolve(false);
      }
    } */

  
    


}
