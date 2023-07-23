interface setting{
    theme:boolean;
    font?:string;
    save():void;
}
class user implements setting{
    constructor (public username:string, public theme:boolean,public font:string){}
    save(): void {
        console.log('save');
    }
    update():void{
        console.log('updated');
    }
}
let user1=new user("abdo",true,"open sans");
console.log(user1.username);
console.log(user1.theme);
console.log(user1.font);
user1.save()
user1.update()
