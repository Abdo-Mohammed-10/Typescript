interface user{
    id:number,
    username:string,
    country:string
}
let details :user = {
    id:120,
    username:"abdo",
    country:"egypt"
}


details.country="syria"


console.log(details);
function get(data:user) {
    console.log(`id is ${data.id}`);
    console.log(`user is ${data.username}`);
    console.log(`country is ${data.country}`);
}
get({id:300,username:"mohammed",country:"saudi"});