interface user{
    id:number,
    username:string,
  
    country:string
}
interface moderator extends user{
    role: string|number
}


interface admin extends user,moderator{
    protect:boolean;
}
let details :admin = {
    id:120,
    username:"abdo",
    country:"egypt",
    role:"mod",
    protect:true
}
