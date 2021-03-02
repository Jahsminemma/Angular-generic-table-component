
export class Users 
{
    id: string;
    first_name : string;
    last_name : string;
    email: string;
    [key : string] : string


    //intances for the user class
    constructor(id:string, first_name: string, last_name: string, email: string){
        
            this.id = id;
            this.first_name = first_name;
            this.last_name = last_name;
            this.email = email;
        }
    }
