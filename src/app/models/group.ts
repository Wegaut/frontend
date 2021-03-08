import {MessageSchema} from '../models/message';

export class GroupsSchema{
       
constructor(
       public _id : string,
       public nameChat:string,
       public user:string,
       public messageContent:string,
       public messages:any,  
         ){}
}
