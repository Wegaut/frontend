import {MessageSchema} from '../models/message';

export class GroupsSchema{
       
constructor(
       public _id : string,
       public nameChat:string,
       public user:any,
       public messageContent:any,
       public messages:any, 
       
         ){}
}
