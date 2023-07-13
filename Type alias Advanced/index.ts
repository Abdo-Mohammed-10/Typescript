// Alias Advanced
type buttons={
    up:string;
    down:number;
    right:boolean;
    left:string;
}
type last= buttons&{
 x:boolean;
}
function getaction(btn: last){
    console.log(`action for btn up is  ${btn.up}`);
    console.log(`action for btn down is  ${btn.down}`);
    console.log(`action for btn right is  ${btn.right}`);
    console.log(`action for btn left is  ${btn.left}`);
}
getaction({up:"grow your skills", right:true,down:20,left:"bad way",x:false});