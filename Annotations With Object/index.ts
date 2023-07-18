let details:{
username:string,
id:number,
hire?:boolean,
skills:{
    one:string,
    two:string
}

}
 let obj={
    username:"abdo",
    id:20,
    skills:{
    one:"html",
    two:"css"
    }}
obj.username="abdo";
obj.id=20;


console.log(obj.username)
console.log(obj.id)
console.log(obj.skills.one)