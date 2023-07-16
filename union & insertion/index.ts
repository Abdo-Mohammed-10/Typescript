// let all : number|string=100;

type a={
one:string,
two:number,
three:boolean
}
type b=a & {
    four:number
}
type c=a & {
    five:boolean
}
type mix=a&c;

function getAction(btn:mix){
    console.log(`hello ${btn.one}`);
    console.log(`hello ${btn.two}`);
    console.log(`hello ${btn.three}`);
    console.log(`hello ${btn.five}`);

}
getAction({one:"string",two:100,three:true,five:false});