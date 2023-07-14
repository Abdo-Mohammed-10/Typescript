const easy=10;
const madium=5;
const hard=3;

function gethugesecond() : number {
return 3;
}


enum kids{
    five =30,
    seven=20,
    ten=10
}



enum LEVEL{

   Easy=kids.five,
   Madium=Easy-2,   //note comma ,
   Hard=kids.ten,
   huge=gethugesecond()

}
let lvl:string="easy";
if (lvl=="easy"){
    console.log(`the level is ${lvl} and number of second ${LEVEL.huge}`);
}
