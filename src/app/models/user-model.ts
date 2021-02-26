import {ContactSchema} from '../models/contact';

export class UserModel {
    userId?:       string;
    userType?:         string;
    userEmail?:       string;
    userName?:          string;
    userLastName?:    string;
    userBrand?:  string;
    userTradeName?:    string;
    userPass?:    string;
    userUrlProfilePicture?: string;
    userLevel?: string;
    userAbout?: string;
  
}

export class UserFollow{
    userIdFollower: string;
    userIdFollowed: string;
}

export class UserComment{
    commentId: string;
    eventId: string;
    userId: string;
    comment: string;
    commentDate: string;

}

export class UserSchema {
    _id:string;
    name?:string;
    lastname?:string;
    email?:string;
    password?:string;
    nPhone?:string;
    photoProfile?:string;
    contacts?:[ContactSchema];
    userType?:string;
    updatedAt:string;
    createdAt:string;
}





