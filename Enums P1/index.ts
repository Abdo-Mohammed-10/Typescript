const easy=10;
const madium=5;
const hard=3;

enum LEVEL{

   Easy=10,
   Madium=5,   //note comma ,
   Hard=3

}
let lvl:string="easy";
if (lvl=="easy"){
    console.log(`the level is ${lvl} and number of second ${LEVEL.Easy}`);
}
