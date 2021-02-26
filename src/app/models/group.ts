import {MessageSchema} from '../models/message';

export class GroupsSchema{
       
constructor(
       public id:string,
       public nameChat:string,
       public user?:string,
       public messages?:[MessageSchema],  
         ){}
}
