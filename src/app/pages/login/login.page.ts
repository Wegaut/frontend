import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonSlides, NavController } from '@ionic/angular';
import { UserSchema } from 'src/app/models/user-model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slideMain') slides: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];

  user : UserSchema = new UserSchema;
  public status:string;
  public identity;
  public token;
  public showPassword: boolean = false;
  avatarSlide = {
    slidesPerView: 3.5
  }

  constructor(private serviceLogin: LoginService,
              private navCtrl: NavController,
              public alertController: AlertController,) { }

  ngOnInit() {
  //  this.slides.lockSwipes(true);
  }

  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  selectedAvatar(avatar){
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;

  }

  /*login( fLogin: NgForm ){
    if(fLogin.invalid){return;}
    // this.loginService.login(this.loginUser.email, this.loginUser.password)
    console.log(fLogin.valid);
    console.log(this.user);
    this.serviceLogin.userlogin(this.user.email, this.user.password)
    .subscribe(data=>{
          let navigateParameter = data[0].userId;
          let userName = data[0].userName;
          let userLastName = data[0].userLastName;
          let userBrand = data[0].userBrand;
          let userTradeName = data[0].userTradeName;
          console.log("return parameter");
          console.log(userName + userLastName + userBrand + userTradeName);
          console.log(navigateParameter);
          
          this.navCtrl.navigateRoot('/main/tabs/home', { animated:true });
    },
     error =>{
      this.presentAlert("User and Password Incorrect, please try again");
     });
  }
*/
  async presentAlert(message:string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

 /* register( fRegister: NgForm){
    console.log(fRegister.valid);
    fRegister.reset();

  }*/

  showLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  showRegister(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  login(fLogin){
    //conseguir el objeto completo del usuario logueado
   this.serviceLogin.signin(this.user).subscribe(

    response => {
      if(response.user && response.user._id){
          
        //guardamos el usuario en la propiedad identity 
        this.identity=response.user;
        localStorage.setItem('identity', JSON.stringify(this.identity));
          console.log(this.identity);
            //conseguir el token del usuario identificado
              this.serviceLogin.signin(this.user, true).subscribe(

                response => {
                  if(response.token ){
                      this.token= response.token
                      localStorage.setItem('token', this.token);

                      this.status="Succes";
                      fLogin.reset(); 
                      this.navCtrl.navigateRoot('/main/tabs/home', { animated:true });

                    } else{
                      this.status="error";
                    }
                  },
                  error=> {
                      this.status="error";
                      console.log(error);
                  });
                  
        } else{
          this.status="error";
        }
      },
    
      error=> {
          this.status="error";
          console.log(error);
      });
  }

  
  register(fRegister){
    this.serviceLogin.signup(this.user).subscribe(
      response =>{

        if(response.user &&  response.user._id){
          this.status= 'success';
          fRegister.reset(); 
        }else{
          this.status="error";
        }
      },
      error=>{
        console.log(error);
      }

    );
    
  }
}



