
interface book{
    itemtype:string;
    title:string;
    isban:number;
}
interface game{
    itemtype:string;
    title:string;
    style:string;
    price:number;
}
class collections<t> {
    public data :t[]=[];
    add(item:t):void{
        this.data.push(item);
    }
    }
let itemone=new collections<book>();
itemone.add({itemtype:"book",title:"atomic",isban:56});
itemone.add({itemtype:"book",title:"atom",isban:554646});
console.log(itemone);

let itemtwo=new collections<game>();
itemtwo.add({itemtype:"gaming",title:"uno",style:"action",price:643});

console.log(itemtwo);