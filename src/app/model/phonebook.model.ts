export class Contacts
{
    contactsId! : number;
    firstName! : string;
    lastName! : string;
    phoneNumber! : string;
    usersId! : number;
}

export class Users
{
    id! : number;
    firstName! : string;
    lastName! : string;
    phoneNumber! : string;
    password! : string;
    isRegistered! : boolean;
}

export class LoginModel
{
    private PhoneNumber : string;
    private Password : string;
    
    constructor (ph: string, ps: string) 
    {
        this.PhoneNumber = ph;
        this.Password = ps;
    }
}